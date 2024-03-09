import SkillCardInterface from "@/interfaces/skill-card-interface/page";
import { Quicksand } from 'next/font/google'
import Image from "next/image";
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
})

const SkillCard: React.FC<SkillCardInterface> = ({ Imagem, nome }) => {

    const isDesktopOrLaptop = useMediaQuery({maxWidth:1023})
    const redesSize = isDesktopOrLaptop ? 60 : 80

    return(
        <div className="flex flex-col justify-center w-1/2 items-center p-2 mb-4 bg-light-blue rounded-2xl">
            <Image
                src={Imagem}
                alt={`Icone de ${ nome }`}
                width={ redesSize }
            />
            <p className={`text-lg ${quicksand.className} lg:text-xl`}>{ nome }</p>
        </div>
    )
}

SkillCard.displayName = 'SkillCard'

export default SkillCard