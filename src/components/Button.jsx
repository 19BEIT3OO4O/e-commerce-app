import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
const Button = () => {
  const { user, loginWithRedirect } = useAuth0();

  return (
    <a href="">
      <AiOutlineUserAdd
        className="nav-icons"
        onClick={(e) => loginWithRedirect()}
      />
    </a>
  );
};

export default Button;
