import Button from "core/components/Button"
import { useState } from "react";
import ResultUser from "./ResultUser"
import "./styles.scss"

const Search = () => {

    const [name, setName] = useState('');
    const [click, setClick] = useState(true);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setClick(!click);
    }

    return (
        <>
            <div className="search-container">
                <h1 className="search-title">Encontre um perfil Github</h1>
                <form action="" className="form-search" onSubmit={handleSubmit}>
                    <input className="search-imput" type="text" placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />
                    <Button text="Encontrar" />
                </form>
            </div>

            <div>
                <ResultUser name={name} click={click} />
            </div>

        </>
    );
};

export default Search;