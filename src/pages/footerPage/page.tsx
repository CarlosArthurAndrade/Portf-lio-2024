import { Quicksand } from 'next/font/google'
import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'

const quicksandBold = Quicksand({
    subsets: ['latin'],
    weight: '700'
})

const FooterPage = () => {

    const isDesktopOrLaptop = useMediaQuery({maxWidth:785})
    const redesSize = isDesktopOrLaptop ? '20' : '30'

    return(
        <div className="w-full h-screen bg-dark-blue flex flex-col justify-around items-center pt-8 spacer bg-waves">
            <div className='flex flex-col w-4/5 space-y-4 justify-center items-start mb-8'>
                <h2 className={`text-white text-xl ${quicksandBold.className} lg:text-3xl`}>Minhas redes</h2>
                <div className="flex flex-col space-y-2">
                <IconContext.Provider value={{ size: redesSize }}>
                    <a className={`text-lg text-light-blue ${quicksandBold.className} flex lg:text-2xl`}>
                        <FaLinkedin color='white' className='mr-2'/>
                        Linkedin</a>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: redesSize }}>
                    <a className={`text-lg text-light-blue ${quicksandBold.className} flex lg:text-2xl`}>
                        <FaGithub color='white' className='mr-2'/>
                        Github</a>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: redesSize }}>
                    <a className={`text-md text-light-blue ${quicksandBold.className} flex lg:text-2xl`}>
                        <HiOutlineMail color='white' className='mr-2'/>
                        Arthurandrade918@gmail.com</a>
                </IconContext.Provider>
                </div>
            </div>
            <div className="bg-purple border-t border-blue p-4 w-4/5">
                <p className={`text-md text-light-blue ${quicksandBold.className} lg:text-2xl`}>© Carlos Arthur 2024</p>
            </div>
        </div>
    )
}

FooterPage.displayName = 'FooterPage'

export default FooterPage