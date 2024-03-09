import Navbar, { LinkList } from "@/components/navbar/page"
import { Comfortaa, Quicksand } from 'next/font/google'
import SkillCard from "@/components/skillCard/page"
import FooterPage from "@/pages/footerPage/page"
import arrayIcons from "@/data/page"

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: '700'
})
  
const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
})

const linksNav: LinkList = {
    linkList: [
        {
            title: 'Home',
            subtitle: 'Home',
            href: '/#Home'
        },
        {
            title: 'Sobre Mim',
            subtitle: 'Sobre Mim',
            href: '/#AboutMe'
        },
        {
            title: 'Meus Projetos',
            subtitle: 'Projetos',
            href: '/Projetos'
        },
        {
            title: 'Fale Comigo',
            subtitle: 'Contato',
            href: '/#Contact'
        },
    ],
    blue: false
}

const linksFooter = {
    footerLinks: [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Meus Projetos',
            href: '/Projetos'
        }
    ]
}

export default function SkillsPage() {
    return(
        <main>
            <section className="w-full bg-light-blue h-screen">
                <div className="w-full min-h-full flex flex-col items-center">
                    <Navbar linkList={ linksNav.linkList } blue={ false }/>
                    <div className="bg-light-blue w-full flex flex-col items-center justify-center space-y-2 p-12">
                        <h1 className={`text-2xl ${comfortaa.className} lg:text-3xl`}>/Skills</h1>
                        <p className={`text-md ${comfortaa.className} text-center lg:text-xl`}>Ferramentas que aprendi ao longo dos anos.</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full items-center bg-light-blue pb-8 lg:space-y-4 xl:pb-16">
                        {
                            arrayIcons.map((skill, index) => {
                                return(
                                <SkillCard 
                                Imagem={ skill.Imagem }
                                nome={ skill.nome }
                                key={ index }
                                />
                                )
                            })
                        }
                    </div>
                </div>
                <FooterPage />
            </section>
        </main>
    )
}