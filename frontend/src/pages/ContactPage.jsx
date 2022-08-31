import "../styles/components/pages/ContactPage.css";
import { useState } from "react";
import axios from "axios";

function ContactPage() {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(`http://localhost:3000/api/contacto`, formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <div className="contenedor-home">
      <div className="container-skills">
        <div className="title">
          <h2>
            CONTAC<span>TANOS</span>
          </h2>
        </div>
        <div className="container-skills-h3">
          <p>¿Tenes una idea para desarrollar?</p>
          <p>
            No dudes, ponete en contacto con nosotros y te ayudamos a
            concretarla.
          </p>
        </div>
      </div>

      <div className="contenedor-contact1">
        <div className="div-container">
          <h2>¡Contáctanos!</h2>

          <div className="form-contacto">
            <form action="/contacto" method="post" onSubmit={handleSubmit}>
            <label for="nombre"> </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <label for="email"> </label>
              <input
                type="email"
                name="email"
                placeholder="Correo"
                value={formData.email}
                onChange={handleChange}
              />
              <label for="telefono"> </label>
              <input
                type="text"
                name="telefono"
                placeholder="Telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
              <label for="mensaje"> </label>
              <input
                type="text"
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              />

              <button>Enviar</button>
            </form>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
