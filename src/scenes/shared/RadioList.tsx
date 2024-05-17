type Props = {
  label: string,
  group: string,
  isSelected: boolean,
  handleClick: () => void,
  index: number,
}

function RadioList({ label, group, isSelected, handleClick, index }: Props) {

  return (
    <div className="relative my-1 py-1 w-full flex justify-center">

      <input
        className={"absolute w-full text-blue-600 focus:ring-blue-500 opacity-0"}
        type="radio"
        id={`radio-${index}-${label}`}
        name={group}
        checked={isSelected}
        onChange={handleClick}>
      </input>

      <label htmlFor={`radio-${index}-${label}`} className={(isSelected ? "bg-black text-white " : "bg-transparent text-black ") + "flex justify-center w-full h-full text-lg sm:text-sm px-3 sm:px-1 font-medium text-gray-900 border-[1px] border-black"}>{label}</label>

    </div>
  )
}

export default RadioList