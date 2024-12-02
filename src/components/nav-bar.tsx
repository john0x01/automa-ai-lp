import { User } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="flex w-full max-w-[1440px] px-4 py-8 bg-black items-center justify-between relative z-50">
      <h1>Logo</h1>
      <ul className="flex items-center gap-8">
        <li>
          <Link href="#product">Produto</Link>
        </li>
        <li>
          <Link href="#pricing">Preços</Link>
        </li>
        <li>
          <Link href="#company">Empresa</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Button variant="outline" shadow="none">
          Fazer Login
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full">
            <User className={'mx-auto text-black scale-150'} />
          </div>
        </Button>
        <Button className="px-6" shadow="none">
          Criar Conta
        </Button>
      </div>
      <div className="bg-gradient-to-r from-yellow-300/0 via-yellow-300 to-yellow-300/0 absolute left-0 bottom-0 right-0 h-[1px]" />
    </nav>
  )
}
