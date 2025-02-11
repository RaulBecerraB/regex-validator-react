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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#0A2F7B] px-6 py-5">
          <h1 className="text-white text-xl font-semibold m-0">
            Compilador Unidad 1 - Lenguajes y autómatas II
          </h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Expresión Regular Section */}
          <h2 className="text-[#0A2F7B] text-lg font-semibold mb-3">
            Expresión regular
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 font-mono">
            (A-Z)(a-z U A-Z U 0-9 U _)*
          </div>

          {/* Entrada Section */}
          <h2 className="text-[#0A2F7B] text-lg font-semibold mb-3">
            Entrada
          </h2>
          <input
            type="text"
            value={input}
            onChange={(e) => validateInput(e.target.value)}
            placeholder="Ingrese texto..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Salida Section */}
          <h2 className="text-[#0A2F7B] text-lg font-semibold mb-3">
            Salida
          </h2>
          <div className={`min-h-[45px] px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 ${
            input ? (isValid ? 'text-green-600' : 'text-red-600') : ''
          }`}>
            {input && (isValid ? 'Palabra correcta' : 'Palabra incorrecta')}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0A2F7B] px-6 py-4 text-center">
          <p className="text-white text-sm">
            Powered by Raúl Becerra
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
