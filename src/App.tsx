import Sidebar from './layout/Sidebar.tsx';
import Nav from './layout/Nav.tsx';
import CardsDasboard from './components/domain/CardsDasboard.tsx';
import type { ICompanyCard } from './interface/card.ts';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/cardService.ts';
import AddCardModal from './components/domain/AddCardModal.tsx';
import LoadingSpinner from './components/common/LoadingSpinner.tsx';

export const App = () => {
  const [cards, setCards] = useState<ICompanyCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsDetails = await getCards();
        setCards(cardsDetails.cards);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cards:', error);
        setIsLoading(false);
      }
    };
    fetchCards();
  }, []);

  const totalAvailableBalance = cards.reduce((sum, card) => sum + card.availableBalance, 0);

  const handleAddCard = useCallback((card: ICompanyCard) => {
    setCards((prevCards) => [...prevCards, card]);
  }, []);

  return (
    <div className="font-sans">
      <Sidebar>
        <Nav />
      </Sidebar>
      <main className="flex-1 lg:ml-[340px] lg:p-12">
        <section className="hidden lg:block">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm text-[#222222]">Available balance</p>
              <div className="flex items-center gap-2">
                <span className="bg-primary rounded-md px-3 py-0.5 text-[13px] text-white">S$</span>
                <span className="text-[26px] font-bold">{totalAvailableBalance}</span>
              </div>
            </div>
            <div>
              <AddCardModal onAddCard={handleAddCard} />
            </div>
          </div>
        </section>
        {/* Mobile section */}
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white px-6 pb-0.5 pt-1 shadow-lg lg:hidden">
          <Nav />
        </div>
        <section className="block w-full lg:hidden">
          <div className="bg-secondary flex items-end justify-between p-6">
            <div>
              <p className="mb-2 text-sm text-white">Account balance</p>
              <div className="flex items-center gap-2">
                <span className="bg-primary rounded-md px-3 py-0.5 text-[13px] text-white">S$</span>
                <span className="text-[26px] font-bold text-white">{totalAvailableBalance}</span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end gap-4">
              <i className="icon-home text-primary text-3xl" />
              <AddCardModal onAddCard={handleAddCard} />
            </div>
          </div>
        </section>
        <div>
          {isLoading ? <LoadingSpinner /> : null}
          {cards.length > 0 ? (
            <CardsDasboard cards={cards} />
          ) : isLoading ? null : (
            <div>No cards found</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
