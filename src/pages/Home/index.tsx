import { Link } from "react-router-dom"
import Button from "../../core/components/Button"
import "./styles.scss"

const Home = () => (
     <div className="home-container">
          <h1 className="text-title">
               Desafio do Capítulo 3, Bootcamp DevSuperior
          </h1>
          <p className="description">
               Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
               Favor observar as instruções passadas no capítulo sobre a<br />
               elaboração deste projeto.<br /><br />
               Este design foi adaptado a partir de Ant Design System for Figma, de<br />
               Mateusz Wierzbicki:<span className="text-email"> antforfigma@gmail.com</span>
          </p>
          <Link to="/search">
               <Button text="Começar"/>
          </Link>
     </div>
);

export default Home;