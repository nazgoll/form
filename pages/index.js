import Image from 'next/image'
import { Inter } from 'next/font/google'
import AuthLayout from "@/layouts/AuthLayout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AuthLayout/>
  )
}
