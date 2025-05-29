import { CardType, TransactionCategoryType, type ICardResponse, type ICompanyCard } from "../interface/card";

const mockCards: ICompanyCard[] = [
  {
    id: 1,
    cardNumber: '2134 2323 4355 2020',
    cardHolderName: 'Mark Henry',
    expiryDate: '12/25',
    cvv: '123',
    cardType: CardType.VISA,
    isFreezed: false,
    isActive: true,
    currency: 'S$',
    cardLimit: 50000,
    availableBalance: 1000,
    isDebitCard: true,
    recentTransactions: [
      {
        id: 1,
        amount: 150,
        title: 'Hamleys',
        description: 'Refund on debit card',
        date: '20 May 2020',
        isDebit: false,
        transactionCategory: TransactionCategoryType.SHOPPING,
      },
      {
        id: 2,
        amount: 150,
        title: 'Hamleys',
        description: 'Charged to debit card',
        date: '20 May 2020',
        isDebit: true,
        transactionCategory: TransactionCategoryType.TRANSPORT,
      },
      {
        id: 3,
        amount: 150,
        title: 'Hamleys',
        description: 'Charged to debit card',
        date: '20 May 2020',
        isDebit: true,
        transactionCategory: TransactionCategoryType.UTILITIES,
      },
      {
        id: 4,
        amount: 150,
        title: 'Hamleys',
        description: 'Charged to debit card',
        date: '20 May 2020',
        isDebit: true,
        transactionCategory: TransactionCategoryType.SHOPPING,
      },
    ],
  },
  {
    id: 2,
    cardNumber: '4532 3434 4356 1212',
    cardHolderName: 'Nitish Mittal',
    expiryDate: '11/25',
    cvv: '456',
    cardType: CardType.VISA,
    isActive: true,
    isFreezed: false,
    currency: 'S$',
    cardLimit: 50000,
    availableBalance: 1000,
    isDebitCard: true,
    recentTransactions: [
      {
        id: 1,
        amount: 250,
        title: 'Hamleys',
        description: 'Refund on debit card',
        date: '20 May 2020',
        isDebit: false,
        transactionCategory: TransactionCategoryType.SHOPPING,
      },
    ],
  },
  {
    id: 3,
    cardNumber: '1232 3434 4356 5657',
    cardHolderName: 'Jon Doe',
    expiryDate: '11/28',
    cvv: '789',
    cardType: CardType.MASTERCARD,
    isActive: true,
    isFreezed: false,
    currency: 'S$',
    cardLimit: 50000,
    availableBalance: 500,
    isDebitCard: true,
    recentTransactions: [
      {
        id: 1,
        amount: 200,
        title: 'Hamleys',
        description: 'Debit on debit card',
        date: '20 May 2020',
        isDebit: true,
        transactionCategory: TransactionCategoryType.SHOPPING,
      },
    ],
  },
  {
    id: 4,
    cardNumber: '1232 3434 4356 5657',
    cardHolderName: 'John Marry',
    expiryDate: '01/28',
    cvv: '876',
    cardType: CardType.VISA,
    isActive: true,
    isFreezed: false,
    currency: 'S$',
    cardLimit: 50000,
    availableBalance: 500,
    isDebitCard: false,
    recentTransactions: [
      {
        id: 1,
        amount: 200,
        title: 'Hamleys',
        description: 'Debit on debit card',
        date: '20 May 2020',
        isDebit: true,
        transactionCategory: TransactionCategoryType.SHOPPING,
      },
    ],
  },
];




export const getCards = async (): Promise<ICardResponse> => {
  
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve( {
        cards: mockCards,
      });
    }, 500)
  );
};


