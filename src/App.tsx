import Sidebar from './layout/Sidebar.tsx';
import Nav from './layout/Nav.tsx';
import CardsDasboard from './components/domain/CardsDasboard.tsx';
import type { ICompanyCard } from './interface/card.ts';
import { useEffect, useState } from 'react';
import { getCards } from './api/cardService.ts';
import AddCardModal from './components/domain/AddCardModal.tsx';

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

  const handleAddCard = (card: ICompanyCard) => {
    setCards([...cards, card]);
  };

  return (
    <div className="font-sans">
      <Sidebar>
        <Nav />
      </Sidebar>
      <main className="ml-[340px] flex-1 p-12">
        <section>
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
        {isLoading ? <div>Loading</div> : null}
        {cards.length > 0 ? <CardsDasboard cards={cards} /> : null}
      </main>
    </div>
  );
};

export default App;
