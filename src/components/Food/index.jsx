import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams, useNavigate } from 'react-router-dom';
import theme from "../../styles/theme";
import { Button } from "../../components/Button";
import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Container, Title, Order, ButtonPicker } from "./styles";
import { api } from '../../services/api';

export function Food({ data, isAdmin, handleDetails, user_id, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const params = useParams();
  const navigate = useNavigate();

  const [number, setNumber] = useState(1);
  const [cartId, setCartId] = useState(null);

  const [loading, setLoading] = useState(false);


  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }

  async function handleInclude() {
    setLoading(true);

    try {
      const cartItem = {
        dish_id: data.id,
        name: data.name,
        quantity: number,
      };

      const response = await api.get('/carts', { params: { created_by: user_id } });
      const cart = response.data[0];

      if (cart) {
        await api.patch(`/carts/${cart.id}`, { cart_items: [cartItem] });
      } else {
        const createResponse = await api.post('/carts', { cart_items: [cartItem], created_by: user_id });
        const createdCart = createResponse.data;

        setCartId(createdCart.id);
      }

      alert('Prato adicionado ao carrinho!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar ao carrinho.');
        console.log('Erro ao adicionar ao carrinho:', error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container {...rest} isAdmin={isAdmin}>
      {isAdmin ? (
        <BiPencil size={"25px"} onClick={handleEdit} />
      ) : (
        <FiHeart
          size={"25px"}
        />
      )}

      <img
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt="Imagem do prato."
        onClick={() => handleDetails(data.id)}
      />

      <Title>
        <h2>{data.name}</h2>
        <RxCaretRight
          size={isDesktop ? "30px" : "30px"}
          onClick={() => handleDetails(data.id)}
        />
      </Title>

      {isDesktop && <p>{data.description}</p>}
      <span>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

      {!isAdmin &&
        <Order>

          <ButtonPicker>
            <button><FiMinus /></button>
            <span>01</span>
            <button><FiPlus /></button>
          </ButtonPicker>

          <Button title="incluir" onClick={handleInclude} loading={loading} />
        </Order>
      }
    </Container>
  );
}