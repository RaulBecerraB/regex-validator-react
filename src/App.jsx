import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [isValid, setIsValid] = useState(false)

  const validateInput = (text) => {
    // Expresión regular: debe comenzar con mayúscula y seguir con letras, números o guiones bajos
    const regex = /^[A-Z][a-zA-Z0-9_]*$/
    setIsValid(regex.test(text))
    setInput(text)
  }

  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Validador de Expresión Regular</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => validateInput(e.target.value)}
        placeholder="Ingrese texto..."
        style={{ padding: '8px', margin: '10px' }}
      />
      <div style={{ 
        color: isValid ? 'green' : 'red',
        marginTop: '10px'
      }}>
        {input && (isValid ? 'Palabra correcta' : 'Palabra incorrecta')}
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        La palabra debe comenzar con una letra mayúscula y puede contener letras, números y guiones bajos.
      </div>
    </div>
  )
}

export default App
