'use client'
import { RiCloseLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Quicksand } from 'next/font/google'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'
import Link from "next/link";

const quicksandBold = Quicksand({
    subsets: ['latin'],
    weight: '500'
})

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
  })

const menuVars = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: [0.12, 0, 0.39, 0]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

interface Link {
    title: string,
    subtitle: string,
    href: string
}

export interface LinkList {
    linkList: Link[]
    blue: boolean
}

const Navbar: React.FC<LinkList> = ({ linkList, blue }) => {
    const [open, setOpen] = useState(false)

    const isDesktopOrLaptop = useMediaQuery({maxWidth:785})
    const iconSize = '40'
    const redesSize = isDesktopOrLaptop ? '20' : '30'

    return(
        <div className={ `flex justify-between items-center w-full pt-8 ${ blue ? 'bg-transparent' : 'bg-light-blue'}`}>
            <h2 className={`text-center ${ blue ? 'text-white' : 'text-blue'} text-xl ${quicksand.className} ml-8 md:text-2xl xl:text-3xl 2xl:ml-20`}>Arthur Andrade</h2>
            {
                isDesktopOrLaptop ? (
                    <button>
                        <IconContext.Provider value={{ size: iconSize }}>
                            <BiMenuAltRight
                                color={`${ blue ? 'white' : 'black'}`}
                                className="mr-6"
                                onClick={() => setOpen(!open)}
                            />
                        </IconContext.Provider>
                    </button>
                ) : (
                    <div className="flex flex-row justify-between space-x-4 pr-4">
                        {
                            linkList.map((link, index) => {
                                return(<Link className={`text-lg md:text-sm ${ blue ? 'text-white' : 'text-blue'} ${ blue ? 'hover:bg-white' : 'hover:bg-button'} ${ blue ? 'hover:text-blue' : 'hover:text-white'} rounded-md py-2 px-2 lg:text-lg xl:text-xl ${quicksandBold.className} flex`} key={ index } href={ link.href }>{ link.subtitle }</Link>)
                            })
                        }
                        <div className="flex flex-row space-x-2">
                            <a className={`text-lg sm:text-xl md:text-sm text-blue ${quicksandBold.className} flex`} href="https://www.linkedin.com/in/carlosarthurandrade" target={"_blank"}>
                                <IconContext.Provider value={{ size: redesSize }}>
                                <FaLinkedin color={`${ blue ? 'white' : 'black'}`} className='mr-2'/>
                                </IconContext.Provider>
                            </a>
                            <a className={`text-lg sm:text-xl text-blue md:text-sm ${quicksandBold.className} flex`} href="https://github.com/CarlosArthurAndrade" target={"_blank"}>
                                <IconContext.Provider value={{ size: redesSize }}>
                                <FaGithub color={`${ blue ? 'white' : 'black'}`} className='mr-2'/>
                                </IconContext.Provider>
                            </a>
                            </div>
                    </div>
                )
            }
            <AnimatePresence>
            {
                open && (
                <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed w-full h-full md:w-[35%] md:h-[30%] md:right-0 top-0 bg-white">
                    <div className="flex justify-between md:justify-end items-center md:items-end w-full pt-8 bg-white">
                            <h2 className={`text-blue text-center text-xl ${quicksand.className} ml-8 md:hidden`}>Arthur Andrade</h2>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <RiCloseLine
                                color="black"
                                onClick={() => setOpen(!open)}
                                className="mr-6"
                                />
                            </IconContext.Provider>
                    </div>
                    <div className="bg-white flex flex-col justify-between items-center pt-8 md:pt-0">
                        <div className='flex flex-col w-4/5 space-y-4 md:space-y-2 justify-center items-start mb-8'>
                            <div className='flex flex-col space-y-4 pb-8'>
                                {
                                    linkList.map((link, index) => {
                                        return(<Link className={`text-lg md:text-sm text-blue ${quicksandBold.className} flex`} key={ index } href={ link.href } onClick={() => setOpen(!open)}>{ link.title }</Link>)
                                    })
                                }
                            </div>
                            <h2 className={`text-blue text-xl sm:text-2xl md:text-lg ${quicksandBold.className}`}>Minhas redes</h2>
                            <div className="flex flex-col space-y-2 md:space-y-1">
                                <a className={`text-lg sm:text-xl md:text-sm text-blue ${quicksandBold.className} flex`} href="https://www.linkedin.com/in/carlosarthurandrade" target={"_blank"}>
                                    <IconContext.Provider value={{ size: redesSize }}>
                                    <FaLinkedin color='black' className='mr-2'/>
                                    </IconContext.Provider>
                                    Linkedin</a>
                                <a className={`text-lg sm:text-xl text-blue md:text-sm ${quicksandBold.className} flex`} href="https://github.com/CarlosArthurAndrade" target={"_blank"}>
                                    <IconContext.Provider value={{ size: redesSize }}>
                                    <FaGithub color='black' className='mr-2'/>
                                    </IconContext.Provider>
                                    Github</a>
                                <a className={`text-md sm:text-lg text-blue md:text-sm ${quicksandBold.className} flex`}>
                                    <IconContext.Provider value={{ size: redesSize }}>
                                    <HiOutlineMail color='black' className='mr-2'/>
                                    </IconContext.Provider>
                                    Arthurandrade918@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    )
}

Navbar.displayName = 'Navbar'

export default Navbar