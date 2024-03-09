import SendCard from "@/components/sendingCard/page"

const cards = [
    {
        title: 'Aplicações que desenvolvi',
        message: 'Projetos construidos durante os últimos anos.',
        button: 'Veja você mesmo',
        href: '/Projetos',
    },
    {
        title: 'Minhas skills e ferramentas',
        message: 'Linguagens, frameworks e bibliotecas que utilizo.',
        button: 'Da uma olhada',
        href: '/Skills',
    }
]

export default function CardsPage() {
    return (
        <div className="w-full flex flex-col sm:flex-row sm:justify-center sm:space-x-px lg:space-x-[2px] items-center space-y-3 sm:space-y-0 bg-dark-blue sm:px-8 pt-16 pb-16 sm:pb-12 sm:pt-12 md:pt-24 md:pb-24 md:min-h-screen">
            {
                cards.map((card, index) => {
                    return(
                        <SendCard
                        key={ index }
                        title={ card.title }
                        message={ card.message }
                        button={ card.button }
                        href={ card.href }
                        />
                    )
                })
            }
        </div>
    )
}