import '../../styles/components/layout/Footer.css';

function Footer() {
  return (
    <>
      <div className="contenedor-footer">
        <div className="fidelity-footer-h2">
          <h2>
            <strong className="strong-footer">Studio Kaizen IDC </strong> <br />
            Estudio de Diseño Industrial <br /> & Diseño Web
          </h2>
        </div>

        <div className="div-footer-span">
          <header className="title3">
            <h3>
              CONTAC<span>TANOS</span>
            </h3>
            <p>¿Tenes una idea para desarrollar?</p>
            <p>
              No dudes, ponete en contacto con nosotros y te ayudamos a
              concretarla.
            </p>
          </header>
          <span className="span-contacto">
            Buenos Aires, Argentina <br />
          </span>
          <span className="span-contacto">
            {" "}
            +54 1168383587 <br />
          </span>
          <span className="span-contacto">studiokaizen.idc@gmail.com</span>
        </div>
      </div>
      <section id="footer">
        <div className="container1">
          <div className="row1">
            <div className="col-md-12 text-center">
              <p>
                Made BY{" "}
                <a href=" ">Derechos reservados. Studio Kaizen IDC 2022</a>
              </p>
              <p>
                In collaboration with <a href=" ">Cintia Mattiello</a>
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* container-fluid */}
    </>
  );
}

export default Footer;
