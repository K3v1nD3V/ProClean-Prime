declare global {
  interface Window {
    BoldCheckout: new (config: {
      orderId: string;
      currency: string;
      amount: number;
      apiKey: string;
      integritySignature: string;
      description?: string;
      redirectionUrl?: string;
    }) => {
      open: () => void;
    };
  }
}

export {};