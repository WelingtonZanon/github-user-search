import Button from "core/components/Button"
import ResultUser from "./ResultUser"
import "./styles.scss"

const Search = () => {

    return (
        <>
            <div className="search-container">
                <h1 className="search-title">Encontre um perfil Github</h1>
                <form action="" className="form-search">
                    <input className="search-imput" type="text" placeholder="Usuário Github" />
                    <Button text="Encontrar" />
                </form>
            </div>
            <div>
                <ResultUser/>
            </div>
        </>
    );
};

export default Search;