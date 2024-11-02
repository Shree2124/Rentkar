export interface Order {
    orderId: string;
    customerName: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    timeWindow: {
      start: string;
      end: string;
    };
    product: string;
  }
  