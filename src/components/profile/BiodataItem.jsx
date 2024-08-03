const BiodataItem = (props) => {
    return (
        <>
            <div className="flex flex-row w-full gap-2 border-b py-4">
                <span className="font-semibold basis-1/6">{props.header}</span>
                <span className="basis 1/4">{props.text}</span>
            </div>
        </>
    )
}

export default BiodataItem