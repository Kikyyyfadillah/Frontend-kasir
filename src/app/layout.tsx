import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Mainlayout from "@/components/Mainlayout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cashier Cafe App',
  description: 'ini halaman cashier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  )
}
