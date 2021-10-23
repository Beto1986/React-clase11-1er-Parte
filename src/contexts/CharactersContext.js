import { useState, useEffect, createContext } from "react";
import { getAllCharacters } from "../services/Characters";

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    getAllCharacters(setData, setErrores);
  }, []);

  const values = { data, errores };
  return (
    <CharacterContext.Provider value={values}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterProvider };
export default CharacterContext;
