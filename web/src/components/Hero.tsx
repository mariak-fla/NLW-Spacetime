import Image from 'next/image'
import anamnesisLogo from '../assets/anamnesis-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={anamnesisLogo} alt="Anamnesis Logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="mt-1 text-lg leading-relaxed">
          Log your most meaningful moments and share them with the world.
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-indigo-300 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black hover:bg-sky-200"
        href="/memories/new/"
      >
        log memory
      </Link>
    </div>
  )
}
