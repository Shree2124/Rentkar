// OptimizePage.tsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Order } from "../../lib/types";

interface Trip {
  orders: Order[];
}

export default function OptimizePage() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [routes, setRoutes] = useState<Trip[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/order");
        console.log(response);
        
        setOrders(response.data);
        console.log(orders);
        
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleOptimize = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/optimize");
      setRoutes(response.data.optimizedRoutes);
    } catch (error) {
      console.error("Failed to optimize route:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Route Optimization</h1>
      <button
        onClick={handleOptimize}
        className="w-full mb-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        disabled={isLoading}
      >
        {isLoading ? "Optimizing..." : "Optimize Route"}
      </button>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Existing Orders</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-medium text-gray-600">
                Customer Name
              </th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-medium text-gray-600">
                Address
              </th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-medium text-gray-600">
                Product
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.orderId} className="border-b">
                <td className="px-4 py-2 text-gray-700">{order.customerName}</td>
                <td className="px-4 py-2 text-gray-700">{order.address}</td>
                <td className="px-4 py-2 text-gray-700">{order.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
          <p className="ml-3">Calculating optimized routes...</p>
        </div>
      ) : (
        routes &&
        routes.map((trip, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Optimized Trip {index + 1}</h2>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-medium text-gray-600">
                    Customer Name
                  </th>
                  <th className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-medium text-gray-600">
                    Address
                  </th>
                  <th className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-medium text-gray-600">
                    Product
                  </th>
                </tr>
              </thead>
              <tbody>
                {trip.orders.map((order) => (
                  <tr key={order.orderId} className="border-b">
                    <td className="px-4 py-2 text-gray-700">{order.customerName}</td>
                    <td className="px-4 py-2 text-gray-700">{order.address}</td>
                    <td className="px-4 py-2 text-gray-700">{order.product}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
