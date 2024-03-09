import { Quicksand } from 'next/font/google'
import Image, { StaticImageData } from "next/image"
import { useMediaQuery } from 'react-responsive'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
})

interface ProjectInterface {
    image: StaticImageData,
    title: string,
    link: string,
    href: string
}

const ProjectCard: React.FC<ProjectInterface> = ({ image, title, link, href }) => {

    const isDesktopOrLaptop = useMediaQuery({maxWidth:639})
    const imageSize = isDesktopOrLaptop ? 300 : 250

    return(
        <div className="sm:w-[49%] bg-project flex flex-col items-center mb-8">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-project">
                    <Image
                    src={ image }
                    alt="Imagem do projeto"
                    width={ imageSize }
                    />
                </div>
                <div className="w-full bg-white flex flex-col items-center justify-start p-8">
                    <h3 className={`text-xl text-bold ${quicksand.className} lg:text-2xl`}>{ title }</h3>
                    <a className={`text-md ${quicksand.className} lg:text-lg`} href={ href }>{ link }</a>
                </div>
            </div>
        </div>
    )
}

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard