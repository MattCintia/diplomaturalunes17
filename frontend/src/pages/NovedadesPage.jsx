import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/Novedades.css';

function NovedadesPage(props) {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);//
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

  return (
    <section className="holder">
      <div className="container-skills2"></div>
      <div className="title">
        <h2>
          NOVE<span>DADES</span>
        </h2>
      </div>
      <div className="container-skills-h3">
        <p>Enterate de lo ultimo...</p>
        <p>Novedades y más!!!</p>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map((item) => (
          <NovedadItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo}
          />
        ))
      )}
    </section>
  );
}

export default NovedadesPage;
