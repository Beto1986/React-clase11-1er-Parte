import { useContext } from "react";
import CharacterContext from "../../contexts/CharactersContext";
import NoHayDatos from "../NoHayDatos/NoHayDatos";

const Div = ({ pKey, pName }) => <div key={pKey}>{pName}</div>;

const Characters = () => {
  const { data } = useContext(CharacterContext);
  console.log("1. ", data);

  return (
    <>
      {
        data &&
          data.map((d) => {
            return <Div pKey={d.id} pName={d.name} />;
          }) //:
        // <NoHayDatos />
      }
    </>
  );
};

export default Characters;
