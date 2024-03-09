'use client'
import Image from 'next/image'
import { Montserrat, Quicksand } from 'next/font/google'
import ProfilePicture from '@/images/arthur-cinza-2-sem-fundo.png'
import Navbar, { LinkList } from "@/components/navbar/page"
import { useMediaQuery } from 'react-responsive'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '800'
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400'
})

const linksNav: LinkList = {
  linkList: [
    {
      title: 'Sobre Mim',
      subtitle: 'Sobre Mim',
      href: '#AboutMe'
    },
    {
      title: 'Meus Projetos',
      subtitle: 'Projetos',
      href: '/Projetos'
    },
    {
      title: 'Minhas Skills',
      subtitle: 'Skills',
      href: '/Skills'
    },
    {
      title: 'Fale Comigo',
      subtitle: 'Contato',
      href: '#Contact'
    },
  ],
  blue: true
}

export default function ProfilePage() {
    const isDesktopOrLaptop = useMediaQuery({maxWidth:1023})
    const imageSize = isDesktopOrLaptop ? 250 : 400
    return (
        <section className="bg-profile w-full pb-12 flex flex-col sm:items-center spacer bg-teste xl:h-[85vh] 2xl:h-[98vh]" id="Home">
          <Navbar linkList={ linksNav.linkList } blue={ linksNav.blue }/>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:pt-8 sm:pb-8 md:mt-4 xl:mt-12 2xl:mt-24">
            <div className="w-auto flex flex-col justify-center items-center pt-8 space-y-2">
              <h1 className={`text-profile text-5xl sm:text-4xl text-center sm:text-left sm:w-4/6 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] ${montserrat.className}`}>Fullstack<br/>Developer</h1>
              <p className={`text-white text-center text-lg text-wrap sm:text-sm sm:text-start w-5/6 sm:w-4/6 md:text-lg lg:text-xl xl:text-2xl ${quicksand.className}`}>Gosto de desenvolver apliações web limpas e muito bem otimizadas.</p>
            </div>
            <div className="self-center sm:pr-8">
              <Image
                src={ProfilePicture}
                alt="minha foto de perfil"
                width={ imageSize }
              />
            </div>
          </div>
        </section>
    )
}