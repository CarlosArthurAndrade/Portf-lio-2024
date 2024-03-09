'use client'
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Comfortaa, Quicksand, Montserrat, Cantarell } from 'next/font/google'
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'
import MessagePopup from "@/components/messagePopup/page";


const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: '700'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '600'
})
  
const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
})

const quicksandBold = Quicksand({
    subsets: ['latin'],
    weight: '700'
})

const cantarell = Cantarell({
    subsets: ['latin'],
    weight: '400'
})

export default function ContactPage() {

    const initialState = {
        email: "",
        name: "",
        message: ""
      };
    const [form, setForm] = useState(initialState)
    const [resultMessage, setResultMessage] = useState('')
    const [success, setSuccess] = useState(true)
    const [showMessage, setShowMessage] = useState(false)

    function validateEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleChangeValue = (field: string, value: string) => {
        setForm(previousState => ({...previousState, [field]: value}));
    }

    const sendEmail = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateEmail(form.email)) {
            setResultMessage("E-mail inválido");
            setSuccess(false)
            return setShowMessage(true);
        }

        try {
            fetch('/pages/api', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) => {
                if (res.status === 200) {
                    setForm(initialState);
                    setResultMessage("Mensagem enviada com sucesso");
                    setSuccess(true)
                    setShowMessage(true)
                  } else if (res.status === 404) {
                    setResultMessage("Ocorreu um erro no envio de e-mail");
                    setSuccess(false)
                    setShowMessage(true)
                  }
            })
        } catch(err: any) {
            console.log('err', err)
        }
    }

    const isDesktopOrLaptop = useMediaQuery({maxWidth:1024})
    const arrowSize = isDesktopOrLaptop? '25' : '30'

    return(
        <section className="w-full pt-12 pb-12 sm:pt-12 sm:pb-12 flex flex-col items-center md:pt-24 md:pb-24 min-h-screen justify-center" id="Contact">
            <div className="w-full flex flex-col justify-start items-center pb-12 space-y-2">
                <h2 className={`text-blue text-left text-2xl ${montserrat.className} lg:text-4xl`}>Manda uma mensagem!!</h2>
                <p className={`text-blue self-center ${quicksandBold.className} text-sm lg:text-lg`}>Tem uma duvida ou proposta? Fale comigo.</p>
            </div>
            <form className="flex flex-col w-full items-center pb-4" onSubmit={sendEmail}>
                <div className="w-4/5 md:w-3/5 pb-4 flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-12">
                    <div className="flex flex-col w-full">
                        <label htmlFor="Name" className={`text-xs text-gray-500 ${cantarell.className}`}>
                            Seu Nome
                        </label>
                        <input
                        id="Name"
                        type="text"
                        className={`border-b border-black ${quicksand.className} text-md py-2 px-1`}
                        placeholder="Digite seu nome"
                        value={form.name}
                        onChange={(e) => handleChangeValue("name", e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="Email" className={`text-xs text-gray-500 ${cantarell.className}`}>
                            Seu Email
                        </label>
                        <input
                        id="Email"
                        className={`border-b border-black ${quicksand.className} text-md py-2 px-1`}
                        placeholder="Digite seu email"
                        value={form.email}
                        onChange={(e) => handleChangeValue("email", e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-4/5 md:w-3/5 mb-4">
                    <label htmlFor="Mensagem" className={`text-xs text-gray-500 ${cantarell.className}`}>Sua mensagem</label>
                    <textarea
                    id="Mensagem"
                    className={`border-b border-black ${quicksand.className} text-sm md:text-lg py-2 px-1 md:mb-6 lg:mb-8`}
                    placeholder="Digite uma mensagem"
                    required
                    value={form.message}
                    onChange={(e) => handleChangeValue("message", e.target.value)}
                    />
                </div>
                <button
                type="submit"
                className={`w-2/5 md:w-[30%] bg-button p-2 lg:p-4 flex justify-center items-start text-white rounded-lg ${quicksand.className} lg:text-lg`}>
                    Enviar
                    <IconContext.Provider value={{ size: arrowSize, className: 'sm:ml-4, lg:ml-2'}}>
                        <LiaLongArrowAltRightSolid color='white'/>
                    </IconContext.Provider>
                    </button>
            </form>
            <AnimatePresence>
                <motion.div
                initial= {{
                    x: '100px'
                }}
                animate= {{
                    x: '0px'
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1]
                }}
                >
                    {
                        showMessage && <MessagePopup success={ success } message={ resultMessage } showMessage={ setShowMessage }/>
                    }
                </motion.div>
            </AnimatePresence>
        </section>
    )
}