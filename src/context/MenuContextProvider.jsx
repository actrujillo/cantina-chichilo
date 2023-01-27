import { createContext, useState, useEffect } from "react";
import appFirebase from "../credenciales";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(appFirebase);

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [menu, setMenu] = useState([]);
  const [principales, setPrincipales] = useState([]);

  useEffect(() => {
    async function dataMenu() {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        // const json = await response.json();
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    }
    dataMenu();
  }, []);

  useEffect(() => {
    async function dataPrincipales() {
      try {
        const querySnapshot = await getDocs(collection(db, "principales"));
        // const json = await response.json();
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setPrincipales(docs);
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
