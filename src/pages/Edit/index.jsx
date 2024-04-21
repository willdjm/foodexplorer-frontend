import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Textarea } from '../../components/Textarea';
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { MdArrowBackIosNew } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Container, Form, Image, Category, Footer } from "./styles";
import logo from "../../../public/logoFooter.png";

import { api } from '../../services/api';

export function Edit({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [dish, setDish] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setDish(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDish();
  }, [params.id]);

  useEffect(() => {
    if (dish) {
      setFileName(dish.image);
      setImage(dish.image);
      setName(dish.name);
      setCategory(dish.category);
      setPrice(dish.price);
      setDescription(dish.description);

      const allIngredients = dish.ingredients.map((ingredient) => ingredient.name);
      setTags(allIngredients);
    }
  }, [dish]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    setUpdatedImage(file);
    setFileName(file.name);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleEditDish() {
    if (!image) {
      return alert("Por favor, insira uma imagem do prato.");
    }

    if (!name) {
      return alert("Por favor, insira o nome do prato.");
    }

    if (!category) {
      return alert("Por favor, selecione a categoria.");
    }

    if (tags.length === 0) {
      return alert("É necessário informar ao menos um ingrediente.");
    }

    if (newTag) {
      return alert("Há ingrediente digitados que não foram inseridos, favor verificar."
      );
    }

    if (!price) {
      return alert("Digite o preço do prato.");
    }

    if (!description) {
      return alert("Necessário uma descrição do prato.");
    }

    setLoading(true);

    try {
      const updatedDish = {
        name: name,
        category: category,
        price: price,
        description: description,
        ingredients: tags,
      };

      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await api.patch(`/dishes/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await api.patch(`/dishes/${params.id}`, updatedDish);

      alert("O Prato foi atualizado e já está disponível no cardápio");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente excluir o prato?");

    if (confirm) {
      setLoading(true);

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível excluir o prato.");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      {!isDesktop &&
        <Menu
          isAdmin={isAdmin}
          isDisabled={true}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      }

      <Header
        isAdmin={isAdmin}
        isDisabled={true}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Form>
          <header>
            <ButtonText
              icon={MdArrowBackIosNew}
              title='Voltar'
              onClick={handleBack} />

            <h1>Editar prato</h1>
          </header>

          <div>
            <Section title="Imagem do prato">
              <Image className="image">
                <label htmlFor="image">
                  <LuUpload size={"25px"} />
                  <span>{fileName || "Selecione imagem"}</span>

                  <input
                    id="image"
                    type="file"
                    onChange={handleImageChange}
                  />
                </label>
              </Image>
            </Section>

            <Section title="Nome">
              <Input className="name"
                placeholder="Ex.: Salada Ceasar"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Section>

            <Section title="Categoria">
              <Category className="category">
                <label htmlFor="category">
                  <select
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="">Selecionar</option>
                    <option value="meal">Refeição</option>
                    <option value="dessert">Sobremesa</option>
                    <option value="beverage">Bebida</option>
                  </select>

                  <MdOutlineKeyboardArrowDown size={"25px"} />
                </label>
              </Category>
            </Section>
          </div>

          <div>
            <Section title="Ingredientes">
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <FoodItem
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <Section title="Preço">
              <Input className="price"
                placeholder="R$ 00,00"
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Section>
          </div>

          <Section title="Descrição">
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Section>

          <div className="buttons">
            <Button
              className="delete"
              title="Excluir prato"
              onClick={handleRemoveDish}
              loading={loading}
            />

            <Button
              className="save"
              title="Salvar alterações"
              onClick={handleEditDish}
              loading={loading}
            />
          </div>
        </Form>
      </main>

      <Footer>
        <img src={logo} alt="Logo" />
        <span>
          ©2024 - Todos os direitos reservados.
        </span>
      </Footer>
    </Container>
  );
}