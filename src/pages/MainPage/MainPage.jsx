// components & style
import Description from '../../components/Description/Description';
import LogButton from '../../components/LogButton/LogButton';
import './MainPage.css'

const MainPage = () => {
    // name should appear on welcome
    const name = "Fio";

    return <section className='main-page-section container'>
        <LogButton route="/" />
        <h2>Welcome {name}!</h2>
        <div className='main-page-div'>
            <img className='main-page-img' src='https://res.cloudinary.com/drhwvqo2m/image/upload/v1702998227/Password%20login%20project/ypquruqtnhsmz9sicng4.png' alt="this project's framework" />
            <Description />
        </div>
    </section>
}

export default MainPage;