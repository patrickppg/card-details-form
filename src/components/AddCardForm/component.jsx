import { useState, useRef } from "react"
import validateForm from "./validation"
import { normalizeNumber, normalizeExp, normalizeCvc } from "./normalization"
import "./.css"

const initialInputState = {
  name: "",
  number: "",
  exp: "",
  cvc: ""
}

const initialValidationState = {}

export default function AddCardForm() {
  const [input, setInput] = useState(initialInputState)
  const [validation, setValidation] = useState(initialValidationState)

  const formRef = useRef(null)

  function handleInputChange(e, val) {
    setInput({
      ...input,
      [e.target.name]: val
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setValidation(validateForm(formRef.current))
  }

  function handleReset(e) {
    e.preventDefault()
    setInput(initialInputState)
    setValidation(initialValidationState)
  }

  const cName = validation?.results?.name === false ? "_visible" : "_hidden"
  const cNumber = validation?.results?.number === false ? "_visible" : "_hidden"
  const cExp = validation?.results?.exp === false ? "_visible" : "_hidden"
  const cCvc = validation?.results?.cvc === false ? "_visible" : "_hidden"

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      ref={formRef}
      noValidate
      >
      <div>
        {validation.passed
        ? 
        <div>
          <div>thank you!</div>
          <div>We've added your card details</div>
          <button type="reset">continue</button>
        </div>
        :
        <div>
          <div>
            <label htmlFor="name">cardholder name</label>
            <input
              id="name"
              name="name"
              value={input.name}
              placeholder="fullname"
              required={ true }
              pattern="^.*$"
              autoComplete="off"
              onChange={e => {
                handleInputChange(e, e.target.value)
              }}
            />
            <div className={cName}>
              can't be empty
            </div>
          </div>

          <div>
            <label htmlFor="number">card number</label>
            <input
              id="number"
              name="number"
              value={input.number}
              placeholder="0000 0000 0000 0000"
              required={ true }
              pattern="^(\d{4}) \1 \1 \1$"
              autoComplete="off"
              onChange={e => {
                const num = normalizeNumber(e.target.value)
                handleInputChange(e, num)
              }}
            />
            <div className={cNumber}>
              {input.number === "" ? "can't be empty": "invalid format"}
            </div>
          </div>

          <div>
            <label htmlFor="exp">exp</label>
            <input
              id="exp"
              name="exp"
              value={input.exp}
              placeholder="00/00"
              required={ true }
              pattern="^\d{2}\/\d{2}$"
              autoComplete="off"
              onChange={e => {
                const exp = normalizeExp(e.target.value)
                handleInputChange(e, exp)
              }}
            />
            <div className={cExp}>
            {input.exp === "" ? "can't be empty": "invalid format"}
            </div>
          </div>

          <div>
            <label htmlFor="cvc">cvc</label>
            <input
              id="cvc"
              name="cvc"
              value={input.cvc}
              placeholder="000"
              required={ true }
              pattern="^\d{3}$"
              autoComplete="off"
              onChange={e => {
                const cvc = normalizeCvc(e.target.value)
                handleInputChange(e, cvc)
              }}
            />
            <div className={cCvc}>
            {input.cvc === "" ? "can't be empty": "invalid format"}
            </div>
          </div>

          <button>confirm</button>
        </div>
        }
      </div>

      <div>
        <output>{input.name || "client"}</output>
        <output>{input.number || "0000 0000 0000 0000"}</output>
        <output>{input.exp || "00/00"}</output>
        <output>{input.cvc || "000"}</output>
      </div>
    </form>
  )
}
