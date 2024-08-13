import {motion} from "framer-motion";
import {FC, useState} from "react";

interface MessagePopup {
    toggleMenu: () => void
}

const MessagePopup:FC<MessagePopup> = ({toggleMenu}) => {
    const [hrName, setHrName] = useState<string>("")
    const [companyName, setCompanyName] = useState<string>("")
    const [message, setMessage]  = useState<string>("")

    const validateInputs = (): boolean => {
        // Validate HR name to ensure it does not contain numbers
        const hrNameRegex = /^[A-Za-z\s]+$/;
        if (!hrNameRegex.test(hrName)) {
            alert("HR name should not contain numbers or special characters.");
            return false;
        }

        // Validate message length
        if (message.length > 250) {
            alert("Message should not exceed 250 characters.");
            return false;
        }

        // Ensure all fields are filled out
        if (!hrName || !companyName || !message) {
            alert("All fields are required.");
            return false;
        }

        return true;
    };
    const sendMessage = async () => {
        if(!validateInputs()) {
            return
        }
        const tgMessage = `HR name: ${hrName}\nCompany name ${companyName}\nMessage: ${message}`
        const token = import.meta.env.VITE_TOKEN
        const chatId = import.meta.env.VITE_CHAT_ID
        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: tgMessage
                })
            })
            const data = await response.json();
            if (data.ok) {
                alert('Message sent successfully!');
                setMessage("")
                setCompanyName("")
                setHrName("")
                toggleMenu()
            } else {
                alert('Error sending message: ' + data.description);
            }
        } catch (error) {
            alert("Error sending message: " + error)
        }
    }


    return (
            <motion.div
                variants={{
                    hidden: {opacity: 0},
                    show: {opacity: 1},
                }}
                initial="hidden"
                animate="show"
                exit={{
                    opacity: 0
                }}
                transition={{duration: 0.4}}
                className="absolute top-0 inset-x-0 h-svh bg-popup-gray z-50 grid place-content-center">
                <div className="flex w-fit h-fit flex-col p-10 bg-background">
                    <div className="flex flex-row gap-5 mb-5">
                        <div className="input-group">
                            <input type="text" value={hrName} onChange={(e) => setHrName(e.target.value)} required/>
                            <label className="input-label" htmlFor="">HR name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                   required/>
                            <label className="input-label" htmlFor="">Company name</label>
                        </div>
                    </div>
                    <div className="input-group w-full">
                        <textarea value={message} onChange={event => setMessage(event.target.value)}
                                  className="min-h-[150px] max-h-[150px]" required/>
                        <label className="textarea-label">
                            Message
                        </label>
                    </div>
                    <div className="mt-3.5 flex flex-row gap-4">
                        <button  className="btn-primary font-normal w-fit " onClick={(e) => {
                            e.preventDefault()
                            sendMessage()
                        }}>
                            Send message
                        </button>
                        <button className=" btn-gray w-fit " onClick={(e) => {
                            e.preventDefault();
                            toggleMenu()
                        }}>
                            Close
                        </button>
                    </div>
                </div>
            </motion.div>
    );
};

export default MessagePopup;