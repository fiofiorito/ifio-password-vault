// components & style
import LoginFormContainer from '../../components/Form/LoginFormContainer';
import { FaLock } from 'react-icons/fa'
import './LoginPage.css'

const LoginPage = () => {
    return <section>
        <div className='login-page-container'>
            <div className='login-page-title'>
                <h2 className='login-page-h2'>iFio vault</h2>
                <FaLock className='login-page-h2' />
            </div>
            <LoginFormContainer />
        </div>
    </section>
}

export default LoginPage;