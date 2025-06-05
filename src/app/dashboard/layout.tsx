/** @type {import('tailwindcss').Config} */
import React from 'react'
import './globals.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div className = "border-2 border-dashed border-black p-4">
    <h2>Dashboard Layout</h2>
    <main>{children}</main>
  </div>
  )
}