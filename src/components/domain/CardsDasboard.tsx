import { type JSX } from 'react';
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
    <div className="lg:mt-10 lg:bg-white">
      <Tabs
        tabsClassName="bg-secondary lg:bg-white px-4 lg:px-0"
        activeTabClassName="text-white lg:text-[#222222]"
        tabs={tabs}
        defaultTabId="debitCard"
      />
    </div>
  );
};

export default CardsDasboard;
