import { motion } from 'framer-motion'
import Link from 'next/link'
import { Molengo } from 'next/font/google'

const molengo = Molengo({
    subsets: ['latin'],
    weight: '400'
})

interface NavLinkInterface {
    title: string,
    href: string
}

const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0,  0.63, 1]
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0, 0.55, 0.45, 1]
        }
    }
}

const MobileNavLink: React.FC<NavLinkInterface> = ({ title, href }) => {
    return (
        <motion.div
        variants={mobileLinkVars}
        className={`text-3xl uppercase text-white ${molengo.className}`}>
            <Link href={ href }>{ title }</Link>
        </motion.div>
    )
}

MobileNavLink.displayName = 'MobileNavLink'

export default MobileNavLink