import './styles.scss'

type Props = {
    text: string;
}

const Button = ({ text}: Props) => (

    <button className="button">
        <div>{text}</div>
    </button>

);

export default Button;