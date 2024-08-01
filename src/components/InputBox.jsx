const InputBox = (props) => {
    return <input type={props.type} className={`text-sm border border-gray-400 focus:border px-4 py-3 rounded-sm ${props.className}`} placeholder={props.placeholder} />
}

export default InputBox;