import Image from 'next/image'
import { Inter } from 'next/font/google'
import FilePicker from '@/components/filepicker'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div >
      <h1>Upload a File</h1>
      <FilePicker />
      </div>
    </main>
  )
}
