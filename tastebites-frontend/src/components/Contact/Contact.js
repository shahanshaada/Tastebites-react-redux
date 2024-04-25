import { useState } from "react";
import FormTemplate from "../../shared-components/FormTemplate/FormTemplate";
import { handleEmptyValue, validateEmail } from "../formValidation";
import style from './Contact.module.scss';
import PopupModal from "../../shared-components/Popup/Popup";



export default function Contact() {
    const data = { title: 'leave us a message', image: 'contact-banner.png' }
    const [user, setUser] = useState({ name: '',phone:'', email: "" ,message:""})
    const [userError, setUserError] = useState({ name: 'int', email: "int",message:"int" })
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleChange = (e, item) => {
        setUser(prev => ({ ...prev, [item]: e.target.value }))
        switch (item) {
            case "email":
                if (!handleEmptyValue(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "Email cannot be empty" }));
                    break;
                }
                else if (!validateEmail(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: 'Email not in proper format' }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;
                }

            case "name":
                if (!handleEmptyValue(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "name cannot be empty" }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;

                }
                case "message":
                    if (!handleEmptyValue(e.target.value)) {
                        setUserError(prev => ({ ...prev, [item]: "message cannot be empty" }));
                        break;
                    }
                    else {
                        setUserError(prev => ({ ...prev, [item]: "" }));
                        break;
    
                    }

            default: break;
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        openModal()
        setUser({ name: '',phone:'', email: "" ,message:""})
    }

    
    return (
<>
        <FormTemplate templateData={data}>
            <p>
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
            </p>
            <form onSubmit={handleSubmit}>
                <div className={style.field}>
                    <input type="text" placeholder="Name*" value={user.name} onChange={(e) => handleChange(e, 'name')} />
                {userError.name !== 'int' && <span className={style.error}>{userError.name}</span>}

                </div>

                <div className={style.field}>
                    <input type="text" placeholder="Email*" value={user.email} onChange={(e) => handleChange(e, 'email')}  />
                    {userError.email !== 'int' && <span className={style.error}>{userError.email}</span>}

                </div>

                <div className={style.field}>
                    <input type="text" placeholder="Phone" value={user.phone} onChange={(e) => handleChange(e, 'phone')}  />
                </div>

                <div className={style.field}>
                    <textarea placeholder="Message*" value={user.message} onChange={(e) => handleChange(e, 'message')}  />
                    {userError.message !== 'int' && <span className={style.error}>{userError.message}</span>}

                </div>
                <button disabled={userError.email!==""|| userError.message!=="" || userError.name !==""} type="submit">Submit <img alt="pic" src="icons/paperplane.svg" height={24} width={24} /></button>

            </form>

        </FormTemplate>
        <PopupModal isOpen={isOpen} onClose={closeModal}>
        <h2>Thank You</h2>
        <p>Message sent succesfully! We will try to revert back soon!</p>
        <button onClick={closeModal}>Close</button>
      </PopupModal>
</>
    )
}