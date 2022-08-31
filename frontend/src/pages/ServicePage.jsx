import '../styles/components/pages/ServicePage.css';

function ServicePage() {
  return (
    <div className="contenedor-home">
      <div className="container-skills2">
        <div className="title">
          <h2>
            NUESTROS <span>SERVICIOS</span>
          </h2>
        </div>
      </div>

      {/*NUESTROS SERVICIOS */}

      <section id="info" class="dark">
        <header class="title1">
          <p>
            <strong>INNOVACION Y DESARROLLO</strong>
          </p>

          <p>
            <strong> De la Idea a la materialidad</strong>
          </p>
          <p>
            En mi emprendimiento personal Studio Kaizen IDC, se cuenta con el
            conocimiento proyectual, técnico y tecnológico para desarrollar
            cualquier tipo de desafío que surja.
          </p>

          <p>
            <strong>
              Para lograr concretar un proyecto se pasa por tres Etapas:
            </strong>
          </p>
          <p>
            <strong>1) RELEVAMIENTO</strong> de problemas, producto o
            necesidades del cliente. En esta instancia se indaga todo lo que sea
            relevante en el entorno del proyecto y así se obtendrá la mayor
            cantidad de información posible para conocer con claridad la
            necesidad del cliente y las posibles soluciones.
          </p>
          <p>
            <strong>2) CREATIVIDAD</strong>, mi etapa favorita! En la cual se
            barajan todas las posibilidades, tanto morfológicas, estéticas, de
            materialidad; según aplique el caso (si es un proyecto tecnológico o
            el desarrollo de un producto). Se experimenta y no se pone limites a
            la imaginación; esta etapa es precisamente para eso, es donde surgen
            IDEAS y aparecen las VARIANTES DE SOLUCIONES.{" "}
          </p>
          <p>
            <strong>3)DESARROLLO</strong>, etapa en la que se concreta TU
            proyecto! Esta es la recta final, donde traigo tu IDEA al plano
            físico; con todo un camino recorrido por detrás; habiendo pasado
            juntos por prototipos, fallas, pruebas, mejoras y lo mejor...
            haberle aportado una IDENTIDAD UNICA Y PROPIA al finalizarlo.
            Generando y planificando juntos cada detalle para su correcta
            realización.
          </p>
        </header>
        <header class="title2">
          <h2>
            ¿Que Servicios <span>Ofrezco?</span>
          </h2>
          <p>
            Mis conocimientos parten de las carreras de Diseño Industrial y
            Programación, en las cuales me capacite para desempeñarme de una
            forma eficaz en diferentes áreas.
          </p>
          <p>
            <strong>* </strong>Con respecto a Diseño Industrial, mi formación
            abarca tanto la parte de análisis e investigación, la parte estética
            y el conocimiento de todos los materiales y procesos productivos que
            se encuentran el la industria. También cuento con conocimientos en
            Modelado 3D, Impresión 3D y realización de Planos Técnicos.
          </p>
          <p>
            <strong>* </strong>Con respecto a Programación, mi formación esta
            dirigida tanto a la Programación Full Stack, el Diseño UX/UI, el
            análisis de datos con Power Bi, entre otros. Busco continuamente
            actualizar mis conocimientos en dicha área para poder desempeñarme
            de forma optima en cada trabajo.
          </p>
        </header>
        <div class="container experties">
          <div class="row">
            <div class="col-md-6">
              <div class="skill">
                <ul class="skill-bar list-unstyled">
                  <li>
                    <span class="percentage" data-value="75%"></span>
                    <em>Desarrollo de productos</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="90%"></span>
                    <em>Modelado Digital 3D</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="85%"></span>
                    <em>
                      Servicio de Productos Personalizados (desde Regalaría,
                      hasta Mobiliarios)
                    </em>
                  </li>
                  <li>
                    <span class="percentage" data-value="80%"></span>
                    <em>Ingenieria Inversa de Producto</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="85%"></span>
                    <em>Fabricación con tecnologías de manufactura digital</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="90%"></span>
                    <em>
                      Investigación para la búsqueda y resolución de las
                      Necesidades del Cliente
                    </em>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-6">
              <div class="skill">
                <ul class="skill-bar list-unstyled">
                  <li>
                    <span class="percentage" data-value="90%"></span>
                    <em>
                      Asesoramientos para locales y particulares en Mobiliarios
                      personalizados y a medida.
                    </em>
                  </li>
                  <li>
                    <span class="percentage" data-value="90%"></span>
                    <em>Servicios de Impresión 3D, Router CNC y Corte Laser</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="75%"></span>
                    <em>Armado de Planos y Carpetas Tecnicas</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="75%"></span>
                    <em>Programación Full Stack</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="60%"></span>
                    <em>Análisis de Datos con Power Bi</em>
                  </li>
                  <li>
                    <span class="percentage" data-value="70%"></span>
                    <em>Diseñador UX/UI</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </section>
    </div>
  );
}

export default ServicePage;
