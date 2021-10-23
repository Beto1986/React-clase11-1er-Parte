import Characters from "./components/characters/Characters";
import { CharacterProvider } from "./contexts/CharactersContext";
import "./styles.css";

export default function App() {
  return (
    <CharacterProvider>
      <h1>Rick y Morty</h1>
      <Characters />
    </CharacterProvider>
  );
}
