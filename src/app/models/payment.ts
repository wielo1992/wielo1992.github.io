export interface Payment {
  name: string;
  surname: string;
  phoneNumber: string;
  dateOfBirth: string;
  country: string;
  city: string;
  street: string;
  homeNumber: string;
  method: PaymentMethod;
  blikCode?: string;
  secureNumber?: string;
  email?: string;
  cardNumber?: string;
  expiredDate?: string;
  password?: string;
}
export enum PaymentMethod {
  BLIK = 'BLIK',
  PAYPAL = 'PayPal',
  CARD = 'Credit Card',
}
