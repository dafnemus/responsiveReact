import { subtitle, title } from "../../constants/text";
import "./styles.css";

const Header = () => {
  return (
    <div id="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Header;
