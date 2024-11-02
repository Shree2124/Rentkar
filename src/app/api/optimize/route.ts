import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";
import Order from "../../models/Order";
import optimizeRoute from "../../../lib/optimizeRote";

export async function POST() {
  await dbConnect();
  const orders = await Order.find({});

  const optimizedRoutes = optimizeRoute(orders);

  return NextResponse.json({ success: true, optimizedRoutes });
}
