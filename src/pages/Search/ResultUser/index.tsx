import Button from 'core/components/Button'
import { makeRequest } from 'core/components/utils/request'
import { User } from 'core/types/Users'
import ImageLoader from 'pages/Loaders/ImageLoader'
import ContentLoader from 'pages/Loaders/ContentLoader'
import { useEffect, useState } from 'react'
import './styles.scss'
import dayjs from 'dayjs'

type Props = {
    name: string;
    click: boolean;
}

const ResultUser = ({ name, click }: Props) => {
    const [render, setRender] = useState(false);
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        setIsLoading(true);
        makeRequest({ url: `${name}` })
            .then(response => setUser(response.data)).then(function (response) {
                //console.log("deu certo");
                setRender(true);
            })
            .catch(function (error) {
                //error
                //console.log(error.toJSON());
                if(name!==""){
                    alert(`Usuário ${name} não localizado.`);
                }
                setRender(false);
            }).finally(() => setIsLoading(false));
            
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [click])
    return (
        <>
            {!render ? "" : (
                <div className="result-box-container">
                    <div className="result-box">
                        {isLoading ? <ImageLoader/> : (
                            <img src={user?.avatar_url}
                                alt="core/assets/images/img.svg" className="result-img" />
                        )}
                        {isLoading ? <ContentLoader/> : (
                            <div className="result-info">
                                <ul className="result-number-box">
                                    <li className="result-number">Repositórios públicos: {user?.public_repos}</li>
                                    <li className="result-number">Seguidores: {user?.followers}</li>
                                    <li className="result-number">Seguindo: {user?.following}</li>
                                </ul>
                                <div className="result-text-box">
                                    <h1 className="text-title-search">Informações</h1>
                                    <ul className="text-box">
                                        <li className="result-text">Empresa: {user?.company}</li>
                                        <li className="result-text">Website/Blog: {user?.blog}</li>
                                        <li className="result-text">Localidade: {user?.location}</li>
                                        <li className="result-text">Membro desde: {(dayjs(`${user?.created_at}`).format("DD/MM/YYYY"))}</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {isLoading ? "" : (
                        <a href={`https://github.com/${name}`}>
                            <Button text="Ver perfil" />
                        </a>
                    )}
                </div>
            )}
        </>
    );
}

export default ResultUser;