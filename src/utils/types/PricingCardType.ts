export type PricingCardType ={
  title: string;
  price: string;
  priceDetails: string;
  features: string[];
  additionalServices: {
    title: string;
    items: string[];
  };
  buttonText: string;
}
