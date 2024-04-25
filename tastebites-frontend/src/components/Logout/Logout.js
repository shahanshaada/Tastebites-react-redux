import FormTemplate from "../../shared-components/FormTemplate/FormTemplate"
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authReducer';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function Logout() {

    const data = { title: 'Logging out ?', image: 'login-banner.png' }
    const userData = useSelector((state) => state?.auth?.user);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleLogout = (e) => {
        e.preventDefault()
      dispatch(logout());
      navigate('/login');
    };



    return (
        <FormTemplate templateData={data}>
            <h3>Dear {userData} !</h3>
            <p>
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.</p>
            <button onClick={(e)=>handleLogout(e)}>Click here to Logout</button>
        </FormTemplate>

    )
}