import { Card } from "react-bootstrap";
import CardGeneral from "./components/CardGeneral";
import CardPaco from "./components/CardPaco";
function App() {
  return (
    <>
      <section className="container">
        <h2 className="text-center my-5">Koders JavaScript 16va Generacción 🤓 🔥</h2>
      </section>
      <section className="container">
        <div className="row">
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Aldahir */}
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
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Hector */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Cris*/}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Jess */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Rubs */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Robert */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Erick */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card Heidel */}
            </CardGeneral>
          </div>
          <div class="col-12 col-md-4 col-lg-3 mt-2">
            <CardGeneral>
              {/* llamar componente de  card fer */}
            </CardGeneral>
          </div>
        </div>
    </section>
    </>
  );
}

export default App;
