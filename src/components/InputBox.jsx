const InputBox = (props) => {
    return <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} id={props.id} className={`text-gray-700 text-sm border border-slate-200 focus:border-slate-400 focus:outline-none px-4 py-3 rounded-sm ${props.className}`} placeholder={props.placeholder} />
}

export default InputBox;
