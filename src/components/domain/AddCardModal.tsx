import type { JSX } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../common/Modal';
import type { ICompanyCard } from '../../interface/card';
import { CardType } from '../../interface/card';
import { useState } from 'react';
import { generateCardDetails } from '../../utils/card';

interface IAddCardModalProps {
  onAddCard: (card: ICompanyCard) => void;
}

const AddCardModal: React.FC<IAddCardModalProps> = (props): JSX.Element => {
  const { onAddCard } = props;
  const [cardHolderName, setCardHolderName] = useState('');
  const [nameError, setNameError] = useState('');

  const { isOpen, open, close } = useModal();

  const validateName = (name: string): boolean => {
    const trimmedName = name.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(trimmedName)) {
      setNameError('Name should contain only alphabets and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateName(cardHolderName)) {
      return;
    }

    const { cardNumber, expiryDate, cvv } = generateCardDetails();
    const newCard: ICompanyCard = {
      id: Date.now(),
      cardNumber: cardNumber,
      cardHolderName: cardHolderName.trim(),
      expiryDate: expiryDate,
      cvv: cvv,
      cardType: CardType.VISA,
      isFreezed: false,
      isActive: true,
      currency: 'S$',
      cardLimit: 50000,
      availableBalance: 5000,
      isDebitCard: true,
      recentTransactions: [],
    };
    onAddCard(newCard);
    setCardHolderName('');
    setNameError('');
    close();
  };

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
              value={cardHolderName}
              onChange={(e) => {
                setCardHolderName(e.target.value);
                validateName(e.target.value);
              }}
              className={`mt-1 block w-full rounded-md border ${
                nameError ? 'border-red-500' : 'border-gray-300'
              } px-3 py-2 shadow-sm focus:border-[#325BAF] focus:outline-none focus:ring-1 focus:ring-[#325BAF]`}
              required
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
