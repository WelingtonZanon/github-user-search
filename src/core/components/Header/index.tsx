import { Link } from "react-router-dom";
import "./styles.scss"

const Header = () => (

     <header className="header">
          <Link to="/">
               <div className="header-text">
                    Bootcamp DevSuperior
          </div>

          </Link>
     </header>
);

export default Header;