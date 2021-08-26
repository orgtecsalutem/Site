import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

import { navLinks } from "../utils/links";
import { social } from "../utils/social";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section>
          <h1 className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </h1>
        </section>
        <section>
          <h3>Mapa do site</h3>
          <ul className="site-map">
            {navLinks.map((item, index) => {
              return (
                <li className="map-link" key={index}>
                  <Link to={item.route}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h3>Redes sociais</h3>
          <ul className="social-media">
            {social.map((item, index) => {
              return (
                <li>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="copyright">
        &copy; 2021 | Organizationem Technologia Salutem. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
