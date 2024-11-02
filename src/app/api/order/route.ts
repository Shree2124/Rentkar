import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import Order, { IOrder } from '../../models/Order';

export async function GET() {
  await dbConnect();
  const orders = await Order.find<IOrder>({});
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const orderData: IOrder = await request.json();
  await dbConnect();

  const order = new Order(orderData);
  await order.save();

  return NextResponse.json({ success: true, message: "Order added", order });
}
