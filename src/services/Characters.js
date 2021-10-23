import Axios from "axios";

const getAllCharacters = async (setData, setErrores) => {
  try {
    const respuesta = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setData(respuesta.data.results);
    setErrores();

    //return respuesta.data.results;
  } catch (error) {
    setErrores(error);
  }
};

export { getAllCharacters };
