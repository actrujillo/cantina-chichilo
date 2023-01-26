import { useContext } from "react";
import { MenuContext } from "../context/MenuContextProvider";

export default function Menu() {
  const { principales } = useContext(MenuContext);
  return (
    <>
      <section>
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem]">
          <h2 className="text-3xl ml-4">CONOCÉ NUESTROS PLATOS</h2>
          <p className="hidden">
            Todos son caseros y mantienen las recetas intactas a lo largo de las
            generaciones
          </p>
        </div>
        <div className="flex flex-col mt-4">
          {principales.map((item, id) => (
            <div className="flex p-4 h-52 items-center" key={id}>
              <img
                src={item.img}
                alt=""
                className="img-principales w-2/5 h-36 mr-4 border-8 border-white object-cover"
              />
              <div className="w-3/5">
                <h4 className="bg-red text-center text-sm uppercase p-1 text-white font-monbaiti">
                  {item.titulo}
                </h4>
                <p className="text-green mx-1">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
