import Map from "./Map";

export default function Horarios() {
  const Ubicacion = [
    { direccion: "Camarones 1901" },
    { barrio: "La Paternal" },
    { ciudad: "CABA" },
  ];

  return (
    <>
      <div className="h-[82vh]">
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem] sm:h-20">
          <h2 className="text-3xl text-center w-full sm:text-4xl sm:text-left sm:ml-4">
            Atendemos en estos horarios
          </h2>
        </div>
        <div className="flex flex-col h-5/6 justify-center">
          <div className="flex flex-col items-center my-4">
            <h3 className="uppercase text-3xl tracking-widest mt-2 mb-2 sm:text-4xl">
              Ubicación
            </h3>
            {Ubicacion.map((item, index) => (
              <div
                key={index}
                className="font-monbaiti font-bold text-xl sm:text-2xl"
              >
                <p>{item.direccion}</p>
                <p>{item.barrio}</p>
                <p>{item.ciudad}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center py-4 text-green">
            <h3 className="text-xl sm:text-2xl">Almuerzo</h3>
            <p className="mb-4 font-monbaiti font-bold sm:text-xl">
              Sábados y domingos de 12:30hs a 15:30hs
            </p>
            <h3 className="text-xl sm:text-2xl">Cena</h3>
            <p className="font-monbaiti font-bold sm:text-xl">
              Jueves a sabado de 20:30hs a 00:00hs
            </p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h3>Aceptamos:</h3>
            <span>Efectivo</span>
            <span>Tarjetas de debito (excepto Maestro)</span>
          </div>
          {/* Mapa utilizado solo para mostrar como quedaria uno de google map con apikey */}
          <div className="flex justify-center mt-8">
            <Map location="Cantina Chichilo, Buenos Aires, Argentina" />
          </div>
        </div>
      </div>
    </>
  );
}
