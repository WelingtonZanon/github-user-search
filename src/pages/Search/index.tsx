
import Button from "core/components/Button"
import "./styles.scss"

const Search = ()=>{
    
    return (
        <div className="search-container">
            <h1 className="search-title">Encontre um perfil Github</h1>
            <form action="" className="form-search">
                <input className="search-imput" type="text" placeholder="Usuário Github"/>
                <Button text="Encontrar"/>
            </form>
            
        </div>
    );
};

export default Search;