interface IGenerateCardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const generateCardDetails = (): IGenerateCardDetails => {
  const digits: (number|string)[] = Array.from(Array(16), () => Math.floor(Math.random() * 10));
  digits.splice(4, 0, ' ');
  digits.splice(9, 0, ' ');
  digits.splice(14, 0, ' ');  

  const cardNumber = digits.join('').trim();
  
  const currentYear = new Date().getFullYear();
  const futureYear = currentYear + Math.floor(Math.random() * 5) + 1; 
  const month = Math.floor(Math.random() * 12) + 1;
  const formattedMonth = month.toString().padStart(2, '0');
  const expiryDate = `${formattedMonth}/${futureYear.toString().slice(-2)}`;
  
  const cvv = Math.floor(Math.random() * 900 + 100).toString();
  
  return { cardNumber, expiryDate, cvv };
};

