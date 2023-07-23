import './globals.css'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YT TranScript',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src='https://www.youtube.com/iframe_api' async></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
