import { Montserrat, Quicksand } from 'next/font/google'
import Link from 'next/link';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'

const montsserat = Montserrat({
    subsets: ['latin'],
    weight: '600'
  })
  
const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
  })

interface SendCard {
    title: string,
    message: string,
    button: string,
    href: string,
}

const SendCard: React.FC<SendCard> = ({ title, message, button, href }) => {

    const isDesktopOrLaptop = useMediaQuery({maxWidth:1023})
    const arrowSize = isDesktopOrLaptop? '25' : '30'

    return(
        <section className="w-[90%] bg-white flex flex-col items-center p-12 space-y-2 md:space-y-8 lg:pt-24 lg:pb-24">
            <div className='flex flex-col items-center space-y-2 xl:space-y-4 2xl:self-start'>
                <h2 className={`text-blue text-wrap xl:w-[90%] xl:self-start text-left text-3xl sm:text-2xl ${montsserat.className} lg:text-4xl 2xl:text-5xl`}>{ title }</h2>
                <p className={`text-black ${quicksand.className} text-sm md:w-4/5 lg:w-3/5 self-start lg:text-lg xl:text-xl 2xl:text-2xl`}>{ message }</p>
            </div>
            <Link className={`w-4/5 sm:w-full self-start bg-button p-2 lg:p-4 flex justify-around sm:justify-center items-start text-white rounded-md ${quicksand.className} lg:text-lg 2xl:text-xl`} href={ href }>
                { button }
                <IconContext.Provider value={{ size: arrowSize, className: 'sm:ml-2 lg:ml-4 self-center'}}>
                    <LiaLongArrowAltRightSolid color='white'/>
                </IconContext.Provider>
            </Link>
        </section>
    )
}

SendCard.displayName = 'SendCard'

export default SendCard