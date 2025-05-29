import React, { type JSX } from 'react';

interface ICardActionProps {
  isFreezed: boolean;
  onCardFreeze: (isFreezed: boolean) => void;
}

const CardAction: React.FC<ICardActionProps> = (props): JSX.Element => {
  const { isFreezed, onCardFreeze } = props;

  return (
    <div className="grid grid-cols-5 rounded-xl bg-[#EDF3FF] px-4 py-5">
      <div
        onClick={() => onCardFreeze(!isFreezed)}
        className="flex cursor-pointer flex-col items-center gap-y-2"
      >
        <img src="images/freeze.png" />
        <p className="leading-1 text-center text-[13px]">
          {isFreezed ? 'Unfreeze' : 'Freeze'} <br />
          card
        </p>
      </div>
      <div className="flex cursor-pointer flex-col items-center gap-y-2">
        <img src="images/spend-limit.png" />
        <p className="leading-1 text-center text-[13px]">
          Set spend <br />
          limit
        </p>
      </div>
      <div className="flex cursor-pointer flex-col items-center gap-y-2">
        <img src="images/GPay.png" />
        <p className="leading-1 text-center text-[13px]">
          Add to <br />
          GPay
        </p>
      </div>
      <div className="flex cursor-pointer flex-col items-center gap-y-2">
        <img src="images/replace-card.png" />
        <p className="leading-1 text-center text-[13px]">
          Replace <br />
          Card
        </p>
      </div>
      <div className="flex cursor-pointer flex-col items-center gap-y-2">
        <img src="images/cancel-card.png" />
        <p className="leading-1 text-center text-[13px]">
          Cancel <br />
          card
        </p>
      </div>
    </div>
  );
};

export default CardAction;
