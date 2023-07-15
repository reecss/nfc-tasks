import Image from 'next/image'
import NFCScanner from './components/NFCScanner/NFCScanner';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
          <NFCScanner />
      </div>
    </main>
  )
}
