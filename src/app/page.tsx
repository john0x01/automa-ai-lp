import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="flex flex-col w-full items-center bg-grid">
        <div className="flex flex-col items-center w-full max-w-7xl px-4 py-32 gap-8">
          <div className="flex flex-col gap-6 items-center">
            <span className="text-center">
              Automações e Desenvolvimento de IA Sob Demanda
            </span>
            <h1 className="text-[64px] max-w-[900px] text-center text-transparent bg-gradient-to-r from-white/20 via-white to-white/20 bg-clip-text leading-tight">
              Transforme seu Negócio com Automações com IA
            </h1>
            <div className="flex items-center gap-4">
              <Button className="group">
                Quero Iniciar Agora{' '}
                <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
                  <ArrowUpRight
                    className={
                      'mx-auto text-white scale-150 group-hover:rotate-[45deg] transition-all duration-300'
                    }
                  />
                </div>
              </Button>
              <div className="flex flex-col gap-2 w-[110px]">
                <div className="flex -gap-2 w-[100px]">{/* Fotos */}</div>
                <span className="text-xs opacity-80 w-full">
                  Aprovado por mais de 90 empresários
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
