const RadioButton = ({color, name, selected, setColor}) => {
    if (!color) return null
    return (
        <label className="inline-block w-5 h-5 relative cursor-pointer">
            <input
                type="radio"
                name={name}
                value={color}
                checked={selected === color}
                onChange={() => setColor(color)}
                className="peer sr-only"
            />
            <div
                style={{backgroundColor: `var(--color-${color}-gold)`}}
                className={`
                w-full h-full rounded-full bg-${color}-gold
                peer-checked:ring-1 peer-checked:ring-stone-800
                peer-checked:ring-offset-3 peer-checked:ring-offset-white
                `}
            />
        </label>
    )
}
export default RadioButton;