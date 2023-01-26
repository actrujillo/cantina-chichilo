import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [menu, setMenu] = useState([]);
  const [principales, setPrincipales] = useState([]);

  useEffect(() => {
    fetch("../../src/data/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  useEffect(() => {
    async function dataPrincipales() {
      try {
        const response = await fetch("../../src/data/principales.json");
        const json = await response.json();
        setPrincipales(json);
      } catch (error) {
        console.log(error);
      }
    }
    dataPrincipales();
  }, []);

  return (
    <MenuContext.Provider value={{ menu, principales }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
