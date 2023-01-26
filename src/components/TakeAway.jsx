import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../context/MenuContextProvider";

export default function TakeAway() {
  const { menu } = useContext(MenuContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [name, setName] = useState("");
  const [empty, setEmpty] = useState(true);
  const error = useRef(null);

  useEffect(() => {
    if (!empty && error.current) {
      error.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [!empty]);

  const handleSelectedItem = (e, item) => {
    const newItems = { ...selectedItems };
    const inputTest = e.target.value;
    if (!/^\d*[0-9]\d*$/.test(inputTest)) {
      return;
    }
    newItems[item.nombre] = inputTest;
    setSelectedItems(newItems);
  };

  const handleSendMessage = () => {
    if (!name || name.length < 3) {
      setEmpty(false);
      return;
    }
    setEmpty(true);
    const pedido = Object.entries(selectedItems)
      .map(([quantity, item]) => `${quantity} - ${item}, `)
      .join("");
    const message = `Hola, mi nombre es ${name} y quiero pedir: ${pedido}`;
    const phoneNumber = "1159939383";
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}
    `;
  };
  return (
    <>
      <section>
        <div className="bg-green h-14 flex items-center text-white mt-[5.5rem]">
          <h2 className="text-2xl mx-2">Cantina Chichilo en tu casa ❤️</h2>
        </div>
        <div className="take-away">
          <div className="rounded flex flex-col text-center m-4 p-2 border-green border-2">
            <span className="text-red font-bold tracking-widest">
              ¡IMPORTANTE!
            </span>
            <p>
              Estos son los horarios de recepción de pedidos para retirar por
              nuestro local:
            </p>
            <ul className="font-monbaiti mt-1">
              <li>Jueves y viernes de 20 a 22hs</li>
              <li>Sabados de 12 a 14hs y de 20 a 22hs</li>
              <li>Domingos de 12 a 14hs</li>
            </ul>
          </div>

          <form className="flex flex-col justify-center items-center">
            {/* <label htmlFor="">Nombre</label> */}
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Escriba su nombre y apellido"
              className="bg-beige w-4/5 my-4 px-2 py-1 border-b-green border-b-2"
            />
            <h2>Escriba la cantidad deseada y presione enviar:</h2>
            {!empty && (
              <span className="text-red" ref={error}>
                *Escriba su nombre y apellido por favor.
              </span>
            )}
            {menu.map((category, id) => (
              <div key={id} className=" w-full flex flex-col p-4">
                <h3 className="bg-red w-4/5 text-white font-monbaiti italic font-semibold mb-2 p-1 shadow shadow-grey">
                  {category.titulo}
                </h3>
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i} className="mb-1 flex justify-between ">
                      <label
                        htmlFor={item}
                        className="w-4/5 border-b-green border-b-2 mr-2 "
                      >
                        {item.nombre}
                      </label>
                      <input
                        type="number"
                        min="0"
                        id={item}
                        value={selectedItems[item.nombre] || ""}
                        onChange={(e) => handleSelectedItem(e, item)}
                        placeholder="Cantidad"
                        className="w-1/5 text-center"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              type="button"
              onClick={handleSendMessage}
              className="bg-red hover:bg-grana hover:duration-500 text-white p-2 mb-4 rounded pointer shadow shadow-gray-400"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
