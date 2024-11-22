import React from "react";

const Result = ({ imc }) => {
  let classificacao = "";
  let detalhes = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    detalhes = "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso."
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
    detalhes = "Que bom que você está com o peso normal!E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
    detalhes = "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer."
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade Grau I";
    detalhes = "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade Grau II"
    detalhes = "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde."
  } else {
    classificacao = "Obesidade Grau III"
    detalhes = "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente."
  }

  return (
    <div className="resultado">
      <h2>Seu IMC: {imc}</h2>
      <h3>Classificação: {classificacao}</h3>
      <div className="detalhes">
        <h4>{detalhes}</h4>
      </div>
    </div>
  )
}

export default Result;
