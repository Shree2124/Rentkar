import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
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

const OrderSchema: Schema = new Schema({
  orderId: { type: String, required: true },
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  timeWindow: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  product: { type: String, required: true },
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
