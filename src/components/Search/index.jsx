import { Container } from "./styles";
import { Input } from "../../components/Input";
import { IoSearch } from "react-icons/io5";

export function Search({ setSearch }) {
  return (
    <Container>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={IoSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}