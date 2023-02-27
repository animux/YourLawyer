import './Navbar.css';
import Logo from '../../assets/logo.png'

function auth(state) {
    if (state === false) {
        return (
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item signin'>
                    <a href="/login" className='nav-link'>Login</a>
                </li>
                <li className='nav-item signin'>
                    <a href="/register" className='nav-link'>Sign up</a>
                </li>
            </ul>
        )
    } else {
        return (
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item signin'>
                    <a href="#" onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/'
                    }} className='nav-link'>Logout</a>
                </li>
            </ul>
        )
    }
}

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={Logo} alt="" width="50px" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Solutions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/packages">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/findlawyers">Find Lawyers</a>
                        </li>
                    </ul>

                    {
                        (localStorage.getItem('token') === null) && (auth(false))
                    }
                    {
                        (localStorage.getItem('token') !== null) && 
                        (auth(true))
                    }
                    
                </div>

            </div>
        </nav>
    )
}

export default Navbar;