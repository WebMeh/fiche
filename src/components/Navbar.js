import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">My App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Espace Enseignant</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/fiche" className="nav-link">Nouvelle Fiche Technique
                                <i className="fa-solid fa-plus mx-2"></i>
                            </Link>
                        </li>
                        
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar