type Props = {
    label: string,
    isChecked: boolean,
    handleCheck: () => void,
    index: number
}

function Checkbox({ label, isChecked, handleCheck, index }: Props) {

    const checkStyles = 'text-black bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-black'

    return (
        <div className="flex items-center mx-1 my-1 me-4">
            <input className={checkStyles} type="checkbox" id={`checkbox-${index}`} checked={isChecked} onChange={handleCheck} />
            <label className="mx-2" htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    )
}

export default Checkbox