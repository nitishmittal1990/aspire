import type { JSX } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../common/Modal';
import type { ICompanyCard } from '../../interface/card';
import { CardType } from '../../interface/card';
import { useState, useCallback } from 'react';
import { generateCardDetails } from '../../utils/card';
import classNames from 'classnames';

interface IAddCardModalProps {
  onAddCard: (card: ICompanyCard) => void;
}

const NAME_REGEX = /^[A-Za-z\s]+$/;
const DEFAULT_CARD_LIMIT = 50000;
const DEFAULT_BALANCE = 5000;

const AddCardModal: React.FC<IAddCardModalProps> = ({ onAddCard }): JSX.Element => {
  const [cardHolderName, setCardHolderName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const { isOpen, open, close } = useModal();

  const validateName = useCallback((name: string): boolean => {
    const trimmedName = name.trim();
    if (!NAME_REGEX.test(trimmedName)) {
      setNameError('Name should contain only alphabets and spaces');
      return false;
    }
    setNameError('');
    return true;
  }, []);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCardHolderName(value);
      validateName(value);
    },
    [validateName]
  );

  const createNewCard = useCallback((name: string): ICompanyCard => {
    const { cardNumber, expiryDate, cvv } = generateCardDetails();
    return {
      id: Date.now(),
      cardNumber,
      cardHolderName: name.trim(),
      expiryDate,
      cvv,
      cardType: CardType.VISA,
      isFreezed: false,
      isActive: true,
      currency: 'S$',
      cardLimit: DEFAULT_CARD_LIMIT,
      availableBalance: DEFAULT_BALANCE,
      isDebitCard: true,
      recentTransactions: [],
    };
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateName(cardHolderName)) {
        return;
      }

      const newCard = createNewCard(cardHolderName);
      onAddCard(newCard);
      setCardHolderName('');
      setNameError('');
      close();
    },
    [cardHolderName, close, createNewCard, onAddCard, validateName]
  );

  return (
    <div>
      <button
        onClick={open}
        className="hover:bg-secondary flex items-center gap-x-2 rounded-md bg-[#325BAF] px-3 py-2 text-[13px] text-white"
      >
        <i className="icon-add" />
        New card
      </button>

      <Modal isOpen={isOpen} onClose={close}>
        <h2 className="text-xl font-bold">Add New Card</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardHolderName"
              autoFocus
              value={cardHolderName}
              onChange={handleNameChange}
              className={classNames(
                'mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-[#325BAF] focus:outline-none focus:ring-1 focus:ring-[#325BAF]',
                nameError ? 'border-red-500' : 'border-gray-300'
              )}
              required
              aria-required="true"
              aria-invalid={!!nameError}
              aria-describedby={nameError ? 'name-error' : undefined}
              placeholder="Enter cardholder name"
            />
            {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
          </div>
          <div className="flex justify-end gap-x-2">
            <button
              type="button"
              onClick={close}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="hover:bg-secondary rounded-md bg-[#325BAF] px-4 py-2 text-sm font-medium text-white"
            >
              Add Card
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCardModal;
