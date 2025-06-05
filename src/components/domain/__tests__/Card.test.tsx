import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  const defaultProps = {
    cardHolderName: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    expiryDate: '12/25',
    cvv: '123',
    isFreezed: false,
  };

  it('renders card with correct information', () => {
    render(<Card {...defaultProps} />);

    // Check card holder name
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // Check last 4 digits of card number
    expect(screen.getByText('3456')).toBeInTheDocument();

    // Check expiry date
    expect(screen.getByText('Thru: 12/25')).toBeInTheDocument();

    // Check CVV is masked
    expect(screen.getByText('***')).toBeInTheDocument();
  });

  it('applies opacity class when card is freezed', () => {
    const { container } = render(<Card {...defaultProps} isFreezed={true} />);
    expect(container.firstChild).toHaveClass('opacity-25');
  });

  it('does not apply opacity class when card is not freezed', () => {
    const { container } = render(<Card {...defaultProps} isFreezed={false} />);
    expect(container.firstChild).not.toHaveClass('opacity-25');
  });

  it('applies custom className when provided', () => {
    const customClass = 'bg-primary';
    const { container } = render(<Card {...defaultProps} className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('renders card with masked card number', () => {
    render(<Card {...defaultProps} />);

    // Check for 12 dots (3 groups of 4 dots)
    const dots = screen
      .getAllByRole('generic', { hidden: true })
      .filter((element) => element.className.includes('rounded-full bg-white'));
    expect(dots).toHaveLength(12);
  });

  it('renders card logos', () => {
    render(<Card {...defaultProps} />);

    // Check for both logos
    const logos = screen.getAllByRole('img');
    expect(logos).toHaveLength(2);
    expect(logos[0]).toHaveAttribute('src', 'images/logo-white.png');
    expect(logos[1]).toHaveAttribute('src', 'images/visa.png');
  });
});
