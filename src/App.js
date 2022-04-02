import CardGeneral from "./components/CardGeneral";
import CardJess from "./components/CardJess";
import CardRubs from "../src/components/CardRubs";
import CardHugo from "./components/Card_hugo";

function App() {
  return (
    <>
      <section className="container">
        <h2 className="text-center my-5">
          Koders JavaScript 16va Generacción 🤓 🔥
        </h2>
      </section>
      <section className="container">
        <div className="row">
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Aldahir */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card Paco */}</CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Hugo */}
              <CardHugo
                name="Hugo Ro."
                ubicacion="Zapopan, Jalisco"
                imagen="hugo.jpeg"
              ></CardHugo>
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card Hector */}</CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card Cris*/}</CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              <CardJess
                name="Jessica Vargas"
                image="/jess-vargas.jpeg"
                profession="Soy diseñadora UI y actualmente trabajo en una agencia llamada Convertia, me encuentro estudiando para convertirme en desarrolladora web. Me encanta dibujar para relajar mi cabeza y disfruto mucho tomar un cafecito, escuchar música y diseñar"
              />
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              <CardRubs></CardRubs>
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card Robert */}</CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card Erick */}</CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card Heidel */}</CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>{/* llamar componente de  card fer */}</CardGeneral>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
