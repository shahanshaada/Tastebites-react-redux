import FormTemplate from "../../shared-components/FormTemplate/FormTemplate";
import style from './Login.module.scss';
import { Link } from 'react-router-dom'
import { useState } from "react";
import {  handleEmptyValue } from '../formValidation';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../reducers/authReducer';
import {useNavigate} from 'react-router-dom';
import PopupModal from "../../shared-components/Popup/Popup";


export default function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {setIsOpen(false);
        navigate('/')
    
    };
    const [user, setUser] = useState({ email: '', password: "" })
    const [userError, setUserError] = useState({ email: 'int', password: "int" })
    const data = { title: 'Login to your account', image: 'login-banner.png' }
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleLogin = () => {
      let username=user.email;
      let pwd=user.password;
      dispatch(loginSuccess({ user:username,password: pwd }));
openModal()
    };

    const handleChange = (e, item) => {
        setUser(prev => ({ ...prev, [item]: e.target.value }))
        switch (item) {
            case "email":
                if (!handleEmptyValue(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "Email cannot be empty" }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;
                }

            case "password":
                if (!handleEmptyValue(e.target.value)) {
                    setUserError(prev => ({ ...prev, [item]: "Password cannot be empty" }));
                    break;
                }
                else {
                    setUserError(prev => ({ ...prev, [item]: "" }));
                    break;

                }

            default: break;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users');
            const users = await response.json();
            const userLog = users.find(u => u?.user?.email === user.email && u?.user?.password === user.password);
            if (userLog) {
            handleLogin();

            } else {
                setUserError(prev => ({ ...prev, password: "Invalid credentials" }));
              
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in');
          }
        
      };


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
                {userError.email !== 'int' && <span className={style.error}>{userError.email}</span>}
                </div>
                <div className={style.field}>
                <input type="password" placeholder="Password*" value={user.password} onChange={(e) => handleChange(e, 'password')} />
                <div className={style.pwdBottom}>
                {userError.password !== 'int' ?<span className={style.error}>{userError.password}</span>:<span></span>}
                <a href="/" className={style.forgetPwd}>Forgot password?</a>
                </div>
                </div>



                <button disabled={userError.email!=='' || userError.password !==''} type="submit">Login</button>
                <div className={style.signup}>Don’t have an account? <Link to="/signup">
                    Register now!
                </Link></div>

            </form>
        </FormTemplate>
        <PopupModal isOpen={isOpen} onClose={closeModal}>
             <h2>You are Logged In, !</h2>
             <p>Happy Browsing!</p>
             <button onClick={closeModal}>Close</button>
           </PopupModal></>
    )
}