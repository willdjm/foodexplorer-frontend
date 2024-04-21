import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from "react-router-dom";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import { Section } from '../../components/Section';
import { Container, Form, Brand } from "./styles";

import logo from "../../../public/logo.png";

export function SignIn() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const { signIn } = useAuth();

function handleSignIn() {
  if (!email, !password) {
    alert("Campo vazio!")
  } else {
    signIn({ email, password });
  }
}

return (
  <Container>
    <Brand>
      <img src={logo} alt="Logo" />
    </Brand>

    <Form>
      <h2>Faça login</h2>

      <Section
        title="Email">
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
      </Section>

      <Section
        title="Senha">
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </Section>

      <Button title="Entrar" onClick={handleSignIn} />

      <Link to="/register">
        Criar uma conta
      </Link>
    </Form>
  </Container>
);
}