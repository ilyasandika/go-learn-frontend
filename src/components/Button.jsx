
const Button = (props) => {
    return <button onClick={props.onClick} className={`py-2 px-6 border border-gray-800 text-md font-semibold rounded-sm ${props.className}`}>{props.text}</button>
}

export default Button;