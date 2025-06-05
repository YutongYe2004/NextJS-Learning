/** @type {import('tailwindcss').Config} */
import React from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        <main>{children}</main>
      </body>
    </html>
  )
}