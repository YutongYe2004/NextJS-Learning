/** @type {import('tailwindcss').Config} */
"use client";
import React from 'react';
import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

export default function DashBoardTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
  return (
  <div className = "border-2 border-dashed border-black p-4">
    <h3>Setting Template {count} </h3>
    <button onClick={() => setCount(count + 1)} className = "bg-blue-500 text-white p-2 rounded my-2">Increment</button>
    {children}
  </div>
  )
}