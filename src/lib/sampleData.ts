import { Order } from "./types";

export const sampleOrders: Order[] = [
  {
    orderId: "101",
    customerName: "John Doe",
    address: "Oberoi Mall, Goregaon",
    coordinates: {
      lat: 19.1551,
      lng: 72.836,
    },
    timeWindow: {
      start: "2024-11-01T10:00:00",
      end: "2024-11-01T12:00:00",
    },
    product: "PlayStation 5",
  },
  {
    orderId: "102",
    customerName: "Jane Smith",
    address: "Lokhandwala, Andheri West",
    coordinates: {
      lat: 19.1338,
      lng: 72.8239,
    },
    timeWindow: {
      start: "2024-11-01T09:00:00",
      end: "2024-11-01T11:00:00",
    },
    product: "Xbox Series X",
  },
  {
    orderId: "103",
    customerName: "Adam Johnson",
    address: "BKC, Bandra",
    coordinates: {
      lat: 19.0586,
      lng: 72.8295,
    },
    timeWindow: {
      start: "2024-11-01T11:00:00",
      end: "2024-11-01T13:00:00",
    },
    product: "iPad Pro",
  },
  {
    orderId: "104",
    customerName: "Emily Davis",
    address: "Raghuleela Mall, Kandivali",
    coordinates: {
      lat: 19.2056,
      lng: 72.8553,
    },
    timeWindow: {
      start: "2024-11-01T09:45:00",
      end: "2024-11-01T11:45:00",
    },
    product: "MacBook Pro",
  },
  {
    orderId: "105",
    customerName: "Michael Scott",
    address: "Khar West",
    coordinates: {
      lat: 19.0669,
      lng: 72.8311,
    },
    timeWindow: {
      start: "2024-11-01T12:00:00",
      end: "2024-11-01T14:00:00",
    },
    product: "Sony Camera",
  },
];
