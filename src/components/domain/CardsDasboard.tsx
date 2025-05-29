import React, { type JSX } from 'react';
import Tabs, { type ITab } from '../common/Tabs';
import type { ICompanyCard } from '../../interface/card';
import CardsDasboardContent from './CardsDasboardContent';

interface ICardsDasboardProps {
  cards: ICompanyCard[];
}

const CardsDasboard = (props: ICardsDasboardProps): JSX.Element => {
  const { cards } = props;

  const debitCards = cards.filter((card) => card.isDebitCard);

  const tabs: ITab[] = [
    {
      id: 'debitCard',
      label: 'My debit cards',
      content: <CardsDasboardContent cards={debitCards} />,
    },
    {
      id: 'allCard',
      label: 'All company cards',
      content: <CardsDasboardContent cards={cards} />,
    },
  ];

  return (
    <div className="mt-10">
      <Tabs tabs={tabs} defaultTabId="debitCard" />
    </div>
  );
};

export default CardsDasboard;
