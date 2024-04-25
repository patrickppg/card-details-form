import { useContext, useState } from "react"
import TextualInput from "../TextualInput/component"
import { InputContext, HandleInputChangeContext } from "./contexts"

const initialCardState = {
  name: "",
  number: "",
  exp: "",
  cvc: ""
}

export default function AddCardForm() {
  const [input, setInput] = useState(initialCardState)

  function handleinputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleReset(e) {
    e.preventDefault()
  }

  return (
    <InputContext.Provider value={input}>
      <HandleInputChangeContext.Provider value={handleinputChange}>
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          >
          <InputsArea />
          <OutputsArea />
        </form>
      </HandleInputChangeContext.Provider>
    </InputContext.Provider>
  )
}

function InputsArea() {
  const input = useContext(InputContext)

  return (
    <>
      <div>
        <TextualInput
          label="cardholder name"
          name="name"
          value={input.name}
        />
        <TextualInput
          label="card number"
          name="number"
          value={input.number}
        />
        <TextualInput
          label="exp"
          name="exp"
          value={input.exp}
        />
        <TextualInput
          label="cvc"
          name="cvc"
          value={input.cvc}
        />
        <button>confirm</button>
      </div>
      <div>
        <div>thank you!</div>
        <div>We've added your card details</div>
        <button type="reset">continue</button>
      </div>
    </>
  )
}

function OutputsArea() {
  const input = useContext(InputContext)

  return (
    <div>
      <output>{input.name || "client"}</output>
      <output>{input.number || "0000 0000 0000 0000"}</output>
      <output>{input.exp || "00/00"}</output>
      <output>{input.cvc || "000"}</output>
    </div>
  )
}

