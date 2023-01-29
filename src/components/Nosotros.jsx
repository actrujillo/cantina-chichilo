import historia from "../data/historia.json";
import nosotros from "../assets/statics/nosotros.png";

export default function Nosotros() {
  return (
    <>
      <div className="section">
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem] sm:h-20 ">
          <h2 className="text-3xl ml-4 sm:text-4xl">Nosotros</h2>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center xl:flex-row xl:m-0 xl:min-h-[72vh] 2xl:justify-evenly">
          <div className="bg-red flex flex-col items-center text-white p-2 m-4 text-center border-8 border-white md:w-[656px] xl:w-2/5">
            <h3 className="text-3xl mb-2 md:text-4xl md:my-4">
              Nuestra historia
            </h3>
            {historia.map((texto) => (
              <p
                key={texto.key}
                className="font-monbaiti mb-2 sm:text-xl md:text-2xl xl:text-base 2xl:text-xl 2xl:p-2"
              >
                {texto.parrafo}
              </p>
            ))}
          </div>
          <div className="px-4 pb-4 flex justify-center ">
            <img
              src={nosotros}
              alt="imagenes de chichilo, familia y amigos"
              className="xl:h-[478px] 2xl:h-[550px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
