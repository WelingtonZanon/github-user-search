import { Link } from "react-router-dom";
import "./styles.scss"

const Header = () => (
     <Link to="/">
          <header className="header">
               <div className="header-text">
                    Bootcamp DevSuperior
          </div>
          </header>
     </Link>
);

export default Header;