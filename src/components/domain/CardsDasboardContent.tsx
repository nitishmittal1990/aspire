import { useState, type JSX } from 'react';
import type { ICompanyCard } from '../../interface/card';
import CardsCarousel from './CardsCarousel';
import CardAction from './CardAction';
import CardRecentTransactions from './CardRecentTransactions';
import CardDetails from './CardDetails';

interface ICardsDasboardContentProps {
  cards: ICompanyCard[];
}

const CardsDasboardContent = (props: ICardsDasboardContentProps): JSX.Element => {
  const { cards } = props;

  const [currentCard, setCurrentCard] = useState(cards[0]);

  const handleCardFreeze = (isFreezed: boolean) => {
    cards.forEach((card) => {
      if (card.id === currentCard.id) {
        card.isFreezed = isFreezed;
      }
    });
    setCurrentCard({ ...currentCard, isFreezed });
  };

  const handleSlideChange = (index: number) => {
    setCurrentCard(cards[index]);
  };

  return (
    <div className="rounded-lg lg:border lg:border-[#FCFCFC] lg:p-10 lg:shadow-lg">
      <div className="lg:hidden">
        <div className="bg-secondary px-5 py-4 pb-10">
          <CardsCarousel cards={cards} onSlideChange={handleSlideChange} />
        </div>
        <CardAction isFreezed={currentCard.isFreezed} onCardFreeze={handleCardFreeze} />
        <div className="flex flex-col gap-y-4 p-5 pb-20">
          <CardDetails card={currentCard} />
          {currentCard.recentTransactions.length > 0 ? (
            <CardRecentTransactions recentTransactions={currentCard.recentTransactions} />
          ) : null}
        </div>
      </div>
      <div className="hidden grid-cols-2 gap-4 lg:grid">
        <div className="flex flex-col gap-y-10">
          <CardsCarousel cards={cards} onSlideChange={handleSlideChange} />
          <CardAction isFreezed={currentCard.isFreezed} onCardFreeze={handleCardFreeze} />
        </div>
        <div className="flex flex-col gap-y-10">
          <CardDetails card={currentCard} />
          {currentCard.recentTransactions.length > 0 ? (
            <CardRecentTransactions recentTransactions={currentCard.recentTransactions} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardsDasboardContent;
