import React from 'react';
import classNames from 'classnames';

interface ICardProps {
  cardHolderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  isFreezed: boolean;
  className?: string;
}

const Card: React.FC<ICardProps> = (props): React.ReactElement => {
  const { cardHolderName, cardNumber, expiryDate, isFreezed, className } = props;

  const last4Digits = cardNumber.slice(-4);
  const maskedArray = Array(4).fill('');

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
      <div className="mb-4 flex flex-row items-center gap-x-5 text-sm font-bold tracking-[8px] text-white">
        <div className="flex flex-row gap-x-2">
          {maskedArray.map((_, index) => (
            <span key={index} className="h-2 w-2 rounded-full bg-white"></span>
          ))}
        </div>
        <div className="flex flex-row gap-x-2">
          {maskedArray.map((_, index) => (
            <span key={index} className="h-2 w-2 rounded-full bg-white"></span>
          ))}
        </div>
        <div className="flex flex-row gap-x-2">
          {maskedArray.map((_, index) => (
            <span key={index} className="h-2 w-2 rounded-full bg-white"></span>
          ))}
        </div>
        {last4Digits}
      </div>
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
