import "../styles/components/pages/PortfolioPage.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import p1 from "../img/p-1.png";
import p2 from "../img/p-2.png";
import p3 from "../img/p-3.png";
import p4 from "../img/p-4.png";
import p5 from "../img/p-5.png";
import p6 from "../img/p-6.png";
import p7 from "../img/p-7.png";
import p8 from "../img/p-8.png";

function PortfolioPage() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  
    return (
      <>
        <div className="contenedor-home">
          <div className="container-skills5">
            <div className="title">
              <h2>
                PORT<span>FOLIO</span>
              </h2>
            </div>
            <div className="container-skills-h3">
              <h2>
                Bienvenidos a mi Portfolio!! Mi nombre es Cintia Mattiello, soy
                Diseñadora Industrial y Programadora FullStack.
              </h2>{" "}
              <h2>
                En este espacio podrán encontrar algunos de los trabajos que
                realice a lo largo de los años.
              </h2>
            </div>

            {/* PORTFOLIO */}
            <section id="portfolio" className="light">
              <div className="title">
                <div className="team-social1">
                  <img src="../img/linkedin.png" alt="" />
                </div>
                <div className="team-social2">
                  <img src="../img/instagram.png" alt="" />
                </div>
                <div className="team-social3">
                  <img src="../img/facebook.png" alt="" />
                </div>
                <div className="team-social4">
                  <img src="../img/behance.png" alt="" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="row8">
          <ul id="filters" className="list-inline">
            <li data-filter=".branding" className="filter">
              Branding
            </li>
            <li data-filter=".disgrafico" className="filter">
              Dis. Grafico
            </li>
            <li data-filter=".disindustrial" className="filter">
              Dis. Industrial
            </li>
            <li data-filter=".impresion3d" className="filter">
              Impresion 3D
            </li>
            <li data-filter=".fullstack" className="filter">
              FullStack
            </li>
          </ul>
        </div>

        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Studio <span>Kaizen</span></h3>
              <p>Diseño de Logo para emprendimiento personal</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Stay <span>Positive</span></h3>
              <p>Diseño de Logotipo para Marca de Accesorios.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Destreza <span>Espacial</span></h3>
              <p>
              Diseño de Juego Lúdico + Paneles + Maqueta y Packaging
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p4}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Distincion <span>Philips</span></h3>
              <p>Diseño de Distincion + Paneles + Maqueta</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p5}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>El <span>Espinal</span></h3>
              <p>Diseño de embases y Paneles.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p6}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Parlante <span>Beats</span></h3>
              <p>Diseño y Modelado de Parlante.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p7}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Impresion <span>3D</span></h3>
              <p>Prototipado, Modelado e Impresion 3D.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p8}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Impresion <span>3D</span></h3>
              <p>Prototipado, Modelado e Impresion 3D.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
export default PortfolioPage;

