import { Comfortaa, Quicksand } from 'next/font/google'
import Image from 'next/image'
import TeamWork from '@/images/team-work-dark-blue.png'
import { useMediaQuery } from 'react-responsive'

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: '700'
  })
  
  const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '500'
  })

export default function AboutMe() {
    const isDesktopOrLaptop = useMediaQuery({maxWidth:1023})
    const maxScreenSize = useMediaQuery({ maxWidth:1536})
    const imageSize = isDesktopOrLaptop ? 400 : 600

    return(
        <section className="w-full flex flex-col items-center md:flex-row md:justify-center xl:justify-around md:min-h-screen md:pb-16 md:pt-16" id='AboutMe'>
            <div className="w-8/12 md:w-[250px] xl:w-[330px] 2xl:w-[370px] flex flex-col justify-center items-center h-full pt-16 md:pt-0">
                <div className="w-full mb-2">
                    <h2 className={`text-blue text-left text-3xl md:text-3xl ${comfortaa.className} lg:text-4xl xl:text-[40px] 2xl:text-5xl`}>Nos últimos anos,</h2>
                </div>
                <div className='flex flex-col justify-between items-center space-y-4'>
                    <p className={`text-black ${quicksand.className} text-md md:text-sm lg:text-md xl:text-lg 2xl:text-xl`}>Busquei conhecimentos que me tornassem apto a trabalhar no mercado de programação. Para atingir meus objetivos, me formei na escola de programação Trybe.</p>
                    <p className={`text-black ${quicksand.className} text-md md:text-sm lg:text-md xl:text-lg 2xl:text-xl`}>Durante a realização do curso desenvolvi tanto habilidades sociais como cooperação, comunicação e organização construindo projetos em equipe, como também habilidades técnicas como ReactJS e Mysql em projetos individuais.</p>
                    <p className={`text-black ${quicksand.className} text-md md:text-sm lg:text-md xl:text-lg 2xl:text-xl`}>Hoje, sigo aperfeiçoando e desenvolvendo minhas habilidades em busca da minha primeira vaga como programador.</p>
                </div>
            </div>
            <div className='pb-12 md:pb-0'>
                <Image
                src={ TeamWork }
                alt='Imagem de pessoas desenvolvendo um site'
                width={ imageSize }
                />
            </div>
        </section>
    )
}