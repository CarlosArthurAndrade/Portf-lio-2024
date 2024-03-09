import Navbar, { LinkList } from "@/components/navbar/page"
import Alexandria from '@/images/alexandria-star-nobackground.png'
import ComingSoon from '@/images/em-breve.png'
import Image from "next/image"
import { Comfortaa, Quicksand } from 'next/font/google'
import FooterPage from "@/pages/footerPage/page"
import ProjectCard from "@/components/projectCard/page"

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: '700'
  })
  
const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
})

const projects = [
    {
        image: ComingSoon,
        title: 'Em Breve',
        link: '',
        href: ''
    },
    {
        image: ComingSoon,
        title: 'Em Breve',
        link: '',
        href: ''
    },
    {
        image: ComingSoon,
        title: 'Em Breve',
        link: '',
        href: ''
    }
]


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
            title: 'Minhas Skills',
            subtitle: 'Skills',
            href: '/Skills'
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
            title: 'Minhas Skills',
            href: '/Skills'
        }
    ]
}

export default function ProjectsPage() {
    return(
        <main>
            <section className="w-full bg-light-blue min-h-full">
                <div className="flex flex-col items-center w-full min-h-full">
                    <Navbar linkList={ linksNav.linkList } blue={ false }/>
                    <div className="bg-light-blue w-full flex flex-col items-center justify-center space-y-2 p-12">
                        <h1 className={`text-2xl ${comfortaa.className} lg:text-3xl`}>/Projetos</h1>
                        <p className={`text-md ${comfortaa.className} lg:text-xl`}>Projetos que desenvolvi.</p>
                    </div>
                    <div className="w-[90%] flex flex-col sm:flex-row sm:flex-wrap sm:justify-between md:px-12 items-center bg-light-blue pb-12 xl:pb-16">
                        {
                            projects.map((project, index) => {
                                return(
                                    <ProjectCard
                                    key={ index }
                                    image={ project.image }
                                    title={ project.title }
                                    link={ project.link }
                                    href={ project.href }
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