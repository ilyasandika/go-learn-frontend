import InputBox from "./InputBox.jsx";

const InputWithLabel = (props) => {
    return (
        <>
            <label className="font-semibold block mb-2">{props.label}</label>
            <InputBox type={props.type} value={props.value} className={props.className} onChange={props.onChange} id={props.id} name={props.name} placeholder={props.placeholder}/>
        </>
    )

}

export default InputWithLabel;