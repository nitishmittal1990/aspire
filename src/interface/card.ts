export enum CardType {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
}

export enum TransactionCategoryType {
  FOOD = 'FOOD',
  TRANSPORT = 'TRANSPORT',
  SHOPPING = 'SHOPPING',
  UTILITIES = 'UTILITIES',
  OTHER = 'OTHER',
}

export interface ITransaction {
  id: number;
  amount: number;
  title: string;
  description: string;
  date: string;
  isDebit: boolean;
  transactionCategory: TransactionCategoryType;
}

export interface ICompanyCard {
  id: number;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
  cardType: CardType;
  isFreezed: boolean;
  isActive: boolean;
  currency: string;
  cardLimit: number;
  availableBalance: number;
  isDebitCard: boolean;
  recentTransactions: ITransaction[];
}

export interface ICardResponse {
  cards: ICompanyCard[];
}


