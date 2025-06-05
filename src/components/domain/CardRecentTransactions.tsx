import React from 'react';
import { TransactionCategoryType, type ITransaction } from '@/interface/card';
import Accordion from '@/components/common/Accordion';
import classNames from 'classnames';

interface ITransactionCategoryIconStyle {
  name: string;
  backgroundClassName: string;
}

const ICON_TRANSACTION_CATEGORY_MAP: Record<
  TransactionCategoryType,
  ITransactionCategoryIconStyle
> = {
  [TransactionCategoryType.FOOD]: {
    name: 'icon-storage',
    backgroundClassName: 'bg-[#222222]/10',
  },
  [TransactionCategoryType.TRANSPORT]: {
    name: 'icon-flights',
    backgroundClassName: 'bg-[#00D6B5]/10',
  },
  [TransactionCategoryType.SHOPPING]: {
    name: 'icon-storage',
    backgroundClassName: 'bg-[#009DFF]/10',
  },
  [TransactionCategoryType.UTILITIES]: {
    name: 'icon-megaphone',
    backgroundClassName: 'bg-[#F25195]/10',
  },
  [TransactionCategoryType.OTHER]: {
    name: 'icon-card',
    backgroundClassName: 'bg-[#00D6B5]/10',
  },
};

interface ICardRecentTransactionsProps {
  recentTransactions: ITransaction[];
}

const CardRecentTransactions: React.FC<ICardRecentTransactionsProps> = (props) => {
  const { recentTransactions } = props;

  return (
    <div>
      <Accordion
        title={
          <div className="flex items-center gap-x-3 text-sm">
            <img src="images/transaction.png" />
            <span className="text-[#0C365A]">Recent transactions</span>
          </div>
        }
        titleClassName="bg-[#F5F9FF] border border-[#F5F5F5] p-6 w-full justify-between items-center drop-shadow-sm rounded-lg"
        defaultOpen={true}
      >
        <div className="flex flex-col overflow-hidden rounded-b-xl">
          {recentTransactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={classNames(
                'relative z-10 flex justify-between border-x border-b border-[#F0F0F0] bg-white p-6',
                {
                  'rounded-b-xl': index === recentTransactions.length - 1,
                }
              )}
            >
              <div className="flex gap-x-3">
                <span
                  className={classNames(
                    'flex h-12 w-12 items-center justify-center rounded-full',
                    ICON_TRANSACTION_CATEGORY_MAP[transaction.transactionCategory]
                      .backgroundClassName
                  )}
                >
                  <i
                    className={classNames(
                      'flex w-full items-center justify-center',
                      ICON_TRANSACTION_CATEGORY_MAP[transaction.transactionCategory].name
                    )}
                  />
                </span>
                <div className="text-[#222222]">
                  <p className="text-sm">{transaction.title}</p>
                  <time className="mb-2 flex text-[13px] text-[#AAAAAA]">{transaction.date}</time>
                  <p className="flex items-center gap-x-1 text-xs font-semibold text-[#325BAF]">
                    <span className="flex h-5 w-6 items-center justify-center rounded-full bg-[#325BAF]">
                      <i className="icon-card text-2xs text-white" />
                    </span>
                    {transaction.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <span
                  className={classNames(
                    'text-sm font-bold',
                    transaction.isDebit ? 'text-[#222222]' : 'text-primary'
                  )}
                >
                  {transaction.isDebit ? '-' : '+'} S$
                  {transaction.amount}
                </span>
                <i className="icon-right-arrow text-sm" />
              </div>
            </div>
          ))}
          <div className="-mt-2 flex justify-center border border-[#DDFFEC] bg-[#EDFFF5] p-6 pb-5 text-[13px] text-primary">
            View all card transactions
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default CardRecentTransactions;
