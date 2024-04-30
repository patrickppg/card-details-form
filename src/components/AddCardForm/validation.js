export default function validateForm(form) {
  let passed
  const results = {}
  const textualInputs =
    [...form.elements].filter(e => { return (
      e.tagName === "INPUT" && 
      e.type === "text" ||
      e.type === "password"
    )
    })

  textualInputs.forEach(input => {
    const result = validateTextualInput(input)
    results[`${input.name}`] = result
  })

  passed = Object.values(results).every(r => r === true)

  return { passed, results }
}

function validateTextualInput(input) {
  if (input.required && input.value === "") return false
  else return Boolean(input.value.match(new RegExp(input.pattern)))
}
