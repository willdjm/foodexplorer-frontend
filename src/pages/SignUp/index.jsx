import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import { Container, Form, Brand } from "./styles";
import logo from "../../../public/logo.png";
import { api } from "../../services/api";

export function SignUp() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

function handleSignUp() {
  if (!name || !email || !password) {
    return alert("Preencha todos os campos para prosseguir!");
  }

  if (password.length < 6) {
    return alert("Sua senha precisa deve ter no mínimo 6 caracteres!");
  }

  api.post("/users", { name, email, password })
    .then(() => {
      alert("Seu Usuário foi cadastrado com sucesso!");
      navigate("/");
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    })
}

return (
  <Container>
    <Brand>
      <img src={logo} alt="LogoFoodExplorer" />
    </Brand>

    <Form>
      <h2>Crie sua conta</h2>

      <Section title="Seu nome">
        <Input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={e => setName(e.target.value)}
        />
      </Section>

      <Section title="Email">
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
      </Section>

      <Section title="Senha">
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </Section>

      <Button title="Criar conta" onClick={handleSignUp} />

      <Link to="/">
        Já tenho uma conta
      </Link>
    </Form>
  </Container>
);
}