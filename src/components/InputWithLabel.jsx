import InputBox from "./InputBox.jsx";

const InputWithLabel = (props) => {
    return (
        <>
            <label className="font-semibold block mb-2">{props.label}</label>
            <InputBox className={props.className}  id={props.id} name={props.name} placeholder={props.placeholder}/>
        </>
    )

}

export default InputWithLabel;