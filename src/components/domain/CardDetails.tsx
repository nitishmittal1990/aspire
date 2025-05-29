import React from 'react';
import { type ICompanyCard } from '../../interface/card';
import Accordion from '../common/Accordion';
import classNames from 'classnames';

interface ICardDetailsProps {
  card: ICompanyCard;
}

const CardDetails: React.FC<ICardDetailsProps> = (props) => {
  const { card } = props;

  return (
    <div>
      <Accordion
        title={
          <div className="flex items-center gap-x-3 text-sm">
            <img src="images/card-details.png" />
            <span className="text-[#0C365A]">Card Details</span>
          </div>
        }
        titleClassName="bg-[#F5F9FF] border border-[#F5F5F5] p-6 w-full justify-between items-center drop-shadow-sm rounded-lg"
      >
        <div className="flex flex-col border-x border-b border-[#F0F0F0] p-6">
          {card.cardHolderName}
        </div>
      </Accordion>
    </div>
  );
};

export default CardDetails;
