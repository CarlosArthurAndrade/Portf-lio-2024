import { MdClose } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'


interface MessageBody {
    success: boolean
    message: string
    showMessage: Function
}

const MessagePopup: React.FC<MessageBody> = ({ success, message, showMessage }) => {

    const isDesktopOrLaptop = useMediaQuery({maxWidth:1023})
    const checkSize = isDesktopOrLaptop? '20' : '25'

    return (
        <div className="">
            {
                success ? (
                    <div className="flex flex-row justify-between bg-light-green border-green border-2 rounded p-4 w-[350px] lg:w-[450px] mt-4 lg:p-6">
                        <p className="text-sm flex flex-row text-start text-green lg:text-lg">{
                        <IconContext.Provider value={{ size: checkSize, className: 'mr-1', color: 'green'}}>
                            <FaCheckCircle/>
                        </IconContext.Provider>    
                        } { message }</p>
                        <button onClick={ () => showMessage(false) }>
                            <IconContext.Provider value={{ size: checkSize, className: 'mr-1', color: 'green'}}>
                                <MdClose />
                            </IconContext.Provider> 
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-row justify-between bg-light-red border-red border-2 rounded p-4 w-[350px] lg:w-[450px] mt-4 lg:p-6">
                        <p className="text-sm flex flex-row text-start text-red lg:text-lg">{
                        <IconContext.Provider value={{ size: checkSize, className: 'red'}}>
                            <IoCloseCircle/>
                        </IconContext.Provider>    
                        } { message }</p>
                        <button onClick={ () => showMessage(false) }>
                            <IconContext.Provider value={{ size: checkSize, className: 'mr-1', color: 'red'}}>
                                <MdClose />
                            </IconContext.Provider> 
                        </button>
                    </div>
                )
            }
        </div>
    )
}

MessagePopup.displayName = 'MessagePopup'

export default MessagePopup