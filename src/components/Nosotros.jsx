import historia from "../data/historia.json";
import nosotros from "../assets/statics/nosotros.png";
import nosotros1 from "../assets/statics/nosotros1.jpg";
import nosotros2 from "../assets/statics/nosotros2.jpg";
import nosotros3 from "../assets/statics/nosotros3.jpg";

export default function Nosotros() {
  return (
    <>
      <section>
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem]">
          <h2 className="text-3xl ml-4">Nosotros</h2>
        </div>
        <div className="mt-6">
          <div className="bg-red flex flex-col items-center text-white p-2 m-4 text-center border-8 border-white">
            <h3 className="text-3xl  mb-2">Nuestra historia</h3>
            {historia.map((texto) => (
              <p key={texto.key} className="font-monbaiti mb-2">
                {texto.parrafo}
              </p>
            ))}
          </div>
          <div className="px-4 pb-4">
            {/* <img
              src={nosotros1}
              alt="Don Francisco sirviendo el vino"
              className=" border-8 border-white "
            />
            <img
              src={nosotros2}
              alt="Comida grupal en Chichilo"
              className="absolute w-32 bottom-[-50px] right-10 border-4 border-white"
            />
            <img
              src={nosotros3}
              alt="La Nonna con las bandejas"
              className="absolute w-32 bottom-[-230px] left-10 rotate-6 border-4 border-white"
            /> */}
            <img src={nosotros} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
