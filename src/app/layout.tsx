import './globals.css'
import { Inter } from 'next/font/google'
import { ProvedorTarefa } from '@/data/ContextTarefa'
import Navbar from '../componentes/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ProvedorTarefa>
          <Navbar />
          <main className="p-4">{children}</main>
        </ProvedorTarefa>
      </body>
    </html>
  )
}
