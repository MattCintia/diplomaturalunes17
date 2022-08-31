import { Routes, Route } from "react-router-dom";
import '../../styles/components/layout/Header.css';
import programacion from "../../img/slide-2.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="contenedor">
      <header className="header">
        <nav className="nav">
          <Link className="logo" to="/">
            Studio <strong className="code">Kaizen</strong> IDC
          </Link>

          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/about">
                Sobre Mi
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/service">
                Servicios
              </Link>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link" href="https://github.com/MattCintia">
                GitHub Cintia
              </a>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/contact">
                Contacto
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className="nav-menu-link" to="/novedades">
                Novedades
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
              <p className="texto-header1">
                Estudio de Diseño Industrial & Diseño Web
                <h4>Vos imaginalo, nosotros lo hacemos realidad!</h4>
              </p>
          }
        ></Route>

        <Route
          path="/about"
          element={<p className="texto-header1">Conocenos un poco mas!</p>}
        />

        <Route
          path="/portfolio"
          element={
            <p className="texto-header1">Conoce algunos de Nuestro Trabajos!</p>
          }
        />

        <Route
          path="/contact"
          element={
            <p className="texto-header1">
              Contáctanos y realiza <p>tus objetivos con nosotros!
            </p>
            </p>
          }
        />

        <Route
          path="/novedades"
          element={
            <p className="texto-header1">
              Hay un diseño que te gusto?
              <p> Ahora podes adquirirlo con nosotros!</p>
            </p>
          }
        />

        <Route
          path="/service"
          element={
            <p className="texto-header1">
              Mira nuestros servicios y elegí
              <p>el que más te convenga para tu proyecto!</p>
            </p>
          }
        ></Route>
      </Routes>

      <img src={programacion} className="img-fluid" alt="" />
    </div>
  );
}

export default Header;
