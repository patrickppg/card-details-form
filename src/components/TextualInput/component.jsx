import { useContext } from "react"
import { HandleInputChangeContext } from "../AddCardForm/contexts"

export default function TextualInput({
  label,
  name,
  value,
  isPassword = false,
  autoComplete = "off",
}) {
  const handleInputChange = useContext(HandleInputChangeContext)

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={isPassword ? "password": "text"}
        name={name}
        value={value}
        onChange={handleInputChange}
        autoComplete={autoComplete}
      />
    </div>
  )
}