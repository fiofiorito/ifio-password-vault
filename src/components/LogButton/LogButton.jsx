import { Link } from 'react-router-dom';
import './LogButton.css'

const LogButton = (route) => {
    // this should be dynamic
    const inOrOut = "out"
    return <Link className='log-btn' to={route}><button>Log {inOrOut}</button></Link>
}

export default LogButton;