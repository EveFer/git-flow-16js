import CardGeneral from "./components/CardGeneral";
import CardPaco from "./components/CardPaco";
import CardJess from "./components/CardJess";
import CardRubs from "../src/components/CardRubs";
import CardHugo from "./components/Card_hugo";
import CardAldahir from './components/CardAldahir';

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
              <CardAldahir
                nombre= 'Aldahir Mayorga'
                nickname= 'Aldahir o Alda'
                edad ='27 años'
                ubicacion = 'Zacualtipán de Ángeles, Hidalgo'
                img ='https://scontent.fmex19-1.fna.fbcdn.net/v/t1.6435-9/118999815_3818713098141060_16133105778368841_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=qWKKuCPf4JcAX_DD9Jf&_nc_ht=scontent.fmex19-1.fna&oh=00_AT_GSHPS3ky_dKZD1eGCPWpj868eAOx4YkWmGqVDLFVYmw&oe=626E97AC'/>
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
            <CardPaco name="El Paco" ubicacion="Zapopan, Jalisco" imagen="/1517003198970.jpeg">
              {/* llamar componente de  card Paco */}
            </CardPaco>
            </CardGeneral>
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
