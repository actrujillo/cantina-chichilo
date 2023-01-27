import { useContext } from "react";
import { MenuContext } from "../context/MenuContextProvider";

export default function Menu() {
  const { principales } = useContext(MenuContext);
  return (
    <>
      <div className="section">
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem] sm:h-20 ">
          <h2 className="text-3xl ml-4 sm:text-4xl">CONOCÉ NUESTROS PLATOS</h2>
          <p className="hidden">
            Todos son caseros y mantienen las recetas intactas a lo largo de las
            generaciones
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 ">
          {principales.map((item, id) => (
            <div className="flex items-center p-4 h-52 sm:w-4/5 sm:h-60" key={id}>
              <img
                src={item.img}
                alt="imagen del plato principal"
                className="img-principales w-2/5 h-36 mr-4 border-8 border-white object-cover sm:h-48"
              />
              <div className="w-3/5 sm:text-xl">
                <h4 className="bg-red text-center text-sm uppercase p-1 text-white font-monbaiti sm:text-xl sm:font-bold">
                  {item.titulo}
                </h4>
                <p className="text-green mx-1">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
