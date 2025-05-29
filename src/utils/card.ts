export const maskCardNumber = (cardNumber: string): string => {
  // Remove any spaces or special characters
  const cleaned = cardNumber.replace(/[^0-9]/g, '');

  // Split into groups of 4 digits
  const groups = cleaned.match(/.{1,4}/g) || [];

  // Mask first 3 groups
  const maskedGroups = groups.map((group, index) => (index < 3 ? '•'.repeat(4) : group));

  // Join with spaces
  return maskedGroups.join(' ');
};

interface IGenerateCardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const generateCardDetails = (): IGenerateCardDetails => {
  const digits = Array.from(Array(16), () => Math.floor(Math.random() * 10));

  const cardNumber = digits.join('').replace(/(\d{4})/g, '$1 ').trim();
  
  const currentYear = new Date().getFullYear();
  const futureYear = currentYear + Math.floor(Math.random() * 5) + 1; 
  const month = Math.floor(Math.random() * 12) + 1;
  const formattedMonth = month.toString().padStart(2, '0');
  const expiryDate = `${formattedMonth}/${futureYear.toString().slice(-2)}`;
  
  const cvv = Math.floor(Math.random() * 900 + 100).toString();
  
  return { cardNumber, expiryDate, cvv };
};

