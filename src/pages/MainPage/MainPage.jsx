import './MainPage.css'

const MainPage = () => {
    // name should appear on welcome
    const name = "Fio";

    return <section className='main-page-section container'>
        <h2>Welcome {name}!</h2>
        <div className='main-page-div'>
            <img className='main-page-img' src='https://res.cloudinary.com/drhwvqo2m/image/upload/v1702998227/Password%20login%20project/ypquruqtnhsmz9sicng4.png' alt="this project's framework" />
            <div>
                <h3 className='main-page-h3'>Project overview</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut, atque molestias voluptas dolore commodi dolores impedit. Non reiciendis cumque eius nobis deleniti rem quia fugit quaerat expedita.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut, atque molestias voluptas dolore commodi dolores impedit. Non reiciendis cumque eius nobis deleniti rem quia fugit quaerat expedita.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut, atque molestias voluptas dolore commodi dolores impedit. Non reiciendis cumque eius nobis deleniti rem quia fugit quaerat expedita.</p>
            </div>
        </div>
    </section>
}

export default MainPage;