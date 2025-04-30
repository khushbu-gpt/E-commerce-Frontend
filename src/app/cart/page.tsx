"use client"
import { CartContext } from "@/context/cart.context";
import { useContext } from "react";

export default function Cart() {
    const {cart,removeFromCart,updateQuantity,total}=useContext(CartContext)
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map(item => (
            <li key={item.id} className="border p-3 flex justify-between items-center">
              <div>
                <p>{item.name}</p>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200">+</button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold">Total: ₹{total}</div>
    </div>
  );
}
