/** @type {import('tailwindcss').Config} */
"use client";
import React from 'react';
import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

export default function SrcTemplate({ children }: { children: React.ReactNode }) {
  return <div className = "template">
    <h3>Template Title</h3>
    {children}
    </div>
}