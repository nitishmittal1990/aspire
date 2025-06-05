import { describe, it, expect } from 'vitest';
import { generateCardDetails } from '../card';

describe('generateCardDetails', () => {
  it('should generate valid card details', () => {
    const cardDetails = generateCardDetails();

    // Test card number format
    expect(cardDetails.cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
    expect(cardDetails.cardNumber.length).toBe(19); // 16 digits + 3 spaces

    // Test expiry date format
    expect(cardDetails.expiryDate).toMatch(/^\d{2}\/\d{2}$/);
    const [month, year] = cardDetails.expiryDate.split('/');
    expect(parseInt(month)).toBeGreaterThanOrEqual(1);
    expect(parseInt(month)).toBeLessThanOrEqual(12);
    expect(parseInt(year)).toBeGreaterThanOrEqual(new Date().getFullYear() % 100);
    expect(parseInt(year)).toBeLessThanOrEqual((new Date().getFullYear() + 5) % 100);

    // Test CVV format
    expect(cardDetails.cvv).toMatch(/^\d{3}$/);
    expect(parseInt(cardDetails.cvv)).toBeGreaterThanOrEqual(100);
    expect(parseInt(cardDetails.cvv)).toBeLessThanOrEqual(999);
  });

  it('should generate different card details on each call', () => {
    const firstCall = generateCardDetails();
    const secondCall = generateCardDetails();

    expect(firstCall.cardNumber).not.toBe(secondCall.cardNumber);
    expect(firstCall.expiryDate).not.toBe(secondCall.expiryDate);
    expect(firstCall.cvv).not.toBe(secondCall.cvv);
  });
}); 