import { Order } from './types';

interface Trip {
  orders: Order[];
}

export default function optimizeRoute(orders: Order[]): Trip[] {
  const sortedOrders = orders.sort((a, b) => {
    return new Date(a.timeWindow.start).getTime() - new Date(b.timeWindow.start).getTime();
  });

  const trips: Trip[] = [];
  let currentTrip: Order[] = [];

  for (const order of sortedOrders) {
    if (currentTrip.length < 3) {
      currentTrip.push(order);
    } else {
      trips.push({ orders: currentTrip });
      currentTrip = [order];
    }
  }

  if (currentTrip.length) trips.push({ orders: currentTrip });

  return trips;
}
