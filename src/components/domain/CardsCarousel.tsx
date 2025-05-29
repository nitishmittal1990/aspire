import React from 'react';
import type { ICompanyCard } from '../../interface/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

interface ICardsCarouselProps {
  cards: ICompanyCard[];
  onSlideChange: (index: number) => void;
}

const CardsCarousel = (props: ICardsCarouselProps): React.ReactElement => {
  const { cards, onSlideChange } = props;

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: number) => {
      onSlideChange(currentSlide);
    },
  };

  return (
    <div className="flex w-full flex-col">
      <p className="text-primary mb-3 flex cursor-pointer flex-row-reverse items-center gap-x-1 text-xs font-bold">
        Show card number
        <i className="icon-eye text-sm" />
      </p>
      <div className="card-carousel w-full">
        <Slider {...settings}>
          {cards.map((card, index) => {
            const backgroundClassName = index % 2 === 0 ? 'bg-primary' : 'bg-secondary';
            return (
              <div key={card.id} className="flex justify-center">
                <Card
                  className={backgroundClassName}
                  cardHolderName={card.cardHolderName}
                  cardNumber={card.cardNumber}
                  expiryDate={card.expiryDate}
                  cvv={card.cvv}
                  isFreezed={card.isFreezed}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CardsCarousel;
