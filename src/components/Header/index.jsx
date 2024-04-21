import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Search } from "../../components/Search";
import { Container, Menu, Brand } from "./styles";
import logo2 from "../../../public/logo.png";
import logoAdmin from "../../../public/logoAdmin.png";
import logoAdminMobile from "../../../public/logoAdminMobile.png";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { PiReceipt } from "react-icons/pi";

export function Header({ isAdmin, isDisabled, isMenuOpen, setIsMenuOpen, setSearch }) {
const isDesktop = useMediaQuery({ minWidth: 1024 });
const logo = isAdmin ? (isDesktop ? logoAdmin : logoAdminMobile) : logo2;

const { signOut } = useAuth();
const navigate = useNavigate();

function handleNew() {
navigate("/new");
}

function handleSignOut() {
navigate("/");
signOut();
}

return (
<Container>
  {!isDesktop && (
    <Menu>
      {!isMenuOpen ?
        <FiMenu size={"20px"} onClick={() => setIsMenuOpen(true)} /> :
        <>
          <MdClose size={"20px"} onClick={() => setIsMenuOpen(false)} />
          <span>Menu</span>
        </>
      }
    </Menu>
  )}

  {(isDesktop || !isMenuOpen) && (
    <>

      <Brand>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </Brand>

      {isDesktop && <Search isDisabled={isDisabled} setSearch={setSearch} />}

      {isAdmin ?
        (isDesktop && <Button className="new" title="Novo prato" onClick={handleNew} />) :
        <Button
          className="orders"
          icon={PiReceipt}
          title={isDesktop ? "Pedido (0)" : undefined} isCustomer
          orderCount={0}
        />
      }

      {isDesktop &&
        <ButtonText
          icon={FiLogOut}
          onClick={handleSignOut} />
      }
    </>
  )}
</Container>
);
}
