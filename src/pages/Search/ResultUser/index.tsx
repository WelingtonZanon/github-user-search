import Button from 'core/components/Button'
import './styles.scss'
const ResultUser = () => (

    <div className="result-box-container">
        <div className="result-box">
            <img src="https://avatars.githubusercontent.com/u/5726140?v=4"
                alt="core/assets/images/img.svg" className="result-img" />
            <div className="result-info">
                <ul className="result-number-box">
                    <li className="result-number">Repositórios públicos: 62</li>
                    <li className="result-number">Seguidores: 127</li>
                    <li className="result-number">Seguindo: 416</li>
                </ul>
                <div className="result-text-box">
                    <h1 className="text-title">Informações</h1>
                    <ul className="text-box">
                        <li className="result-text">Empresa: @ZupIT</li>
                        <li className="result-text">Website/Blog: https://thewashington.dev</li>
                        <li className="result-text">Localidade: Uberlândia</li>
                        <li className="result-text">Membro desde: 19/10/2013</li>
                    </ul>
                </div>
            </div>
        </div>
        <Button text="Ver perfil" />
    </div>
);

export default ResultUser;