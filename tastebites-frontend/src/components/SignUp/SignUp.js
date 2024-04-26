import FormTemplate from "../../shared-components/FormTemplate/FormTemplate";
import style from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { validateEmail, handleEmptyValue, validatePasswordLength, validatePasswordStrength, validatePasswordMatch, validatePhoneNumberDigit, validatePhoneNumberLength } from '../formValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupModal from "../../shared-components/Popup/Popup";
import { BACKEND_URL } from "../../environments/env";



export default function SignUp() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {setIsOpen(false);
        navigate('/login')
    
    };
    const [user, setUser] = useState({
        email: '', phone: '', password: "", reentrPwd: "", "ratings": [
            {
                "very-berry": 0,
                "ginger": 0,
                "loaded-berry": 0
            }
        ]
    })
    const [userError, setUserError] = useState({ email: 'int', phone: 'int', password: "int", reentrPwd: "int" })
    const data = { title: 'create your account', image: 'login-banner.png' }
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(BACKEND_URL, { user });
            openModal();

        } catch (error) {
            console.error('Signup error:', error); // Handle signup errors (optional)
        }
    };
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
            case 'phone':
                if (!validatePhoneNumberDigit(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "Phone number should contain only digits" }));
                    break;
                }
                else if (!validatePhoneNumberLength(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "Phone number should contain only 10 digits" }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;

                }
            case "password":
                if (!validatePasswordLength(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: 'Password must be at least 8 characters long' }));
                    break;
                }
                else if (!validatePasswordStrength(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "Password must contain at least one uppercase letter, one lowercase letter, and one digit" }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;

                }
            case 'reentrPwd':
                if (!validatePasswordMatch(e.target.value, user.password)) {
                    setUserError(prev => ({ ...prev, [item]: "Passwords doesnt match" }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;

                }

            default: break;
        }
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
                    <input type="text" placeholder="Email*" value={user.email} onChange={(e) => handleChange(e, 'email')} />
                    {userError.email!=='int' && <span className={style.error}>{userError.email}</span>}
                </div>
                <div className={style.field}>

                    <input type="text" placeholder="Phone Number*" value={user.phone} onChange={(e) => handleChange(e, 'phone')} />
                    {userError.phone!=='int' &&<span className={style.error}>{userError.phone}</span>}
                </div>
                <div className={style.field}>
                    <input type="password" placeholder="Enter Password*" value={user.password} onChange={(e) => handleChange(e, 'password')} />
                    {userError.password!=='int' &&<span className={style.error}>{userError.password}</span>}
                </div>
                <div className={style.field}>
                    <input type="password" placeholder="Re-enter Password*" value={user.reentrPwd} onChange={(e) => handleChange(e, 'reentrPwd')} />
                    {userError.reentrPwd!=='int' &&<span className={style.error}>{userError.reentrPwd}</span>}
                </div>



                <button disabled={userError.email!=='' || userError.phone !=='' || userError.password !=='' || userError.reentrPwd !=='' } type="submit">Signup</button>
                <div className={style.signup}>Already have an account?<Link to="/login">
                    Login now!
                </Link></div>

            </form>
        </FormTemplate>
             <PopupModal isOpen={isOpen} onClose={closeModal}>
             <h2>Thank You, !</h2>
             <p>You have been succesfully registered. Please Login to continue browsing!</p>
             <button onClick={closeModal}>Close</button>
           </PopupModal></>

    )
}