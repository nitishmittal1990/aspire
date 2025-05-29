import React from 'react';
import classNames from 'classnames';
import { maskCardNumber } from '../../utils/card';

interface ICardProps {
  cardHolderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  isFreezed: boolean;
  className?: string;
}

const Card = (props: ICardProps): React.ReactElement => {
  const { cardHolderName, cardNumber, expiryDate, isFreezed, className } = props;

  const maskedCardNumber = maskCardNumber(cardNumber);

  return (
    <div
      className={classNames('relative max-w-[440px] rounded-xl p-6', className, {
        'opacity-25': isFreezed,
      })}
    >
      <div className="mb-5 flex flex-row-reverse">
        <img src="images/logo-white.png" />
      </div>
      <p className="mb-6 text-2xl font-bold text-white">{cardHolderName}</p>
      <p className="mb-4 text-sm font-bold tracking-[8px] text-white">{maskedCardNumber}</p>
      <div className="mb-2 flex flex-row items-center gap-x-8">
        <p className="text-[13px] text-white">Thru: {expiryDate}</p>
        <p className="flex items-center gap-x-2 text-[13px] text-white">
          <span>CVV:</span> <span className="pt-1.5 text-xl leading-none tracking-[7px]">***</span>
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <img src="images/visa.png" />
      </div>
    </div>
  );
};

export default Card;
