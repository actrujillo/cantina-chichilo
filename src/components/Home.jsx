import { Link } from "react-router-dom";
import hero from "../assets/statics/hero.jpg";

export default function Home() {
  return (
    <>
      <section className="h-full flex flex-col">
        <img
          src={hero}
          alt="portada cantina chichilo"
          className="w-full h-full object-cover"
        />
        <div className="h-full flex flex-col justify-center items-center grow text-center">
          <div className="bg-red w-5/6 text-5xl py-3.5 mb-4 text-slate-50 ">
            <h3>¡Take away!</h3>
          </div>
          <p className="text-green font-bold text-2xl mb-4 font-monbaiti">
            Hace tu pedido y pasalo a buscar
          </p>
          <button className="bg-green text-beige text-2xl w-3/5 p-1  mb-4 font-monbaiti">
            ¡
            <Link to="/takeaway" className="underline">
              Pedí acá
            </Link>
            !
          </button>

          <h1 className="text-red text-2xl font-bold mb-1">
            Cantina Chichilo de Buenos Aires
          </h1>
          <p className="text-green text-xl mb-1">
            "Volver al sabor de nuestros abuelos"
          </p>
          <span className="text-red text-xl">*1956-2020*</span>
        </div>
      </section>
    </>
  );
}
