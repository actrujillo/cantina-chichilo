import { Link } from "react-router-dom";
import imgReservas from "../assets/statics/reservas.jpg";

export default function Reservas() {
  return (
    <>
      <section>
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem]">
          <h2 className="text-xl ml-4">Reservas en Cantina Chichilo</h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center text-2xl my-2 font-monbaiti">
            Veni a probar lo más rico de la cocina italiana.
          </p>
          <p className="px-2 text-center text-xl">Tenes dos opciones:</p>
          <ul className="rounded flex flex-col m-4 p-2 border-green border-2">
            <li className="mb-3">
              Podés hacer take away a través de nuestro teléfono{" "}
              <a
                href="tel:4584-1263"
                target="_blank"
                className="underline hover:text-grana hover:duration-500"
              >
                4584-1263
              </a>
              , por{" "}
              <a
                href="https://wa.me/1150200152"
                target="_blank"
                className="underline hover:text-grana hover:duration-500 "
              >
                Whatsapp
              </a>{" "}
              o desde{" "}
              <Link
                to="/takeaway"
                className="underline hover:text-grana hover:duration-500 "
              >
                nuestra seccion.
              </Link>
            </li>
            <li>
              Reservar una mesa llamando UN DIA ANTES a nuestro teléfono:{" "}
              <a
                href="tel:4584-1263"
                target="_blank"
                className="underline hover:text-grana hover:duration-500 "
              >
                4584-1263
              </a>
            </li>
          </ul>
          <h4 className="font-monbaiti text-center italic text-2xl p-2">
            ¡En Cantina Chichilo te estamos esperando!
          </h4>
          <img
            src={imgReservas}
            alt="interior del restaurante"
            className="reservas p-4"
          />
        </div>
      </section>
    </>
  );
}
