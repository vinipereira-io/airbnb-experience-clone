import Logo from '../public/airbnb-logo.png'

function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo"/>
        </nav>
    )
}

export default Navbar