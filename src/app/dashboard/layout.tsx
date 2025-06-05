/** @type {import('tailwindcss').Config} */
"use client";
import React from 'react';
import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
  return (
  <div className = "border-2 border-dashed border-black p-4">
    <h2>Dashboard Layout {count} </h2>
    <button onClick={() => setCount(count + 1)} className = "bg-blue-500 text-white p-2 rounded my-2">Increment</button>
    <div className = "flex gap-4 font-bold text-lg text-blue-500"> 
      <Link href = "/dashboard/settings">Settings</Link>
      <Link href = "/dashboard/about">About</Link>
    </div>
    {children}
  </div>
  )
}