import React, { useState } from "react"
import Result from "../Result"

const Form = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Preencha todos os campos!");
      return;
    }

    const alturaEmMetros = parseFloat(altura) / 100;
    const imc = (parseFloat(peso) / (alturaEmMetros ** 2)).toFixed(2);
    setResultado(imc);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="form-group">
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
          />
        </label>
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {resultado && <Result imc={resultado} />}
    </div>
  );
};

export default Form
