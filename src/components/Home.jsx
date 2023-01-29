import { Link } from "react-router-dom";
import hero from "../assets/statics/hero.jpg";

export default function Home() {
  return (
    <>
      <div className="h-[90vh] flex flex-col">
        <img
          src={hero}
          alt="portada cantina chichilo"
          className="w-full h-full object-cover sm:h-[400px] lg:h-[330px] xl:h-[290px] 2xl:h-[380px]"
        />
        <div className="h-full flex flex-col justify-center items-center grow text-center">
          <div className="bg-red w-5/6 text-5xl py-3.5 mb-4 text-slate-50 lg:w-3/5 lg:tracking-wider xl:w-1/2">
            <h3>¡Take away!</h3>
          </div>
          <p className="text-green font-bold text-2xl mb-4 font-monbaiti">
            Hace tu pedido y pasalo a buscar
          </p>
          <button className="bg-green text-beige text-2xl w-3/5 p-1 mb-4 font-monbaiti lg:w-2/5 xl:w-1/3 xl:p-2">
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
      </div>
    </>
  );
}
