import React, { useState } from "react"
import "./styles/CardLivro.css"

const CardLivro = (props) => {
  const { titulo, autor, quant } = props;
  const [backgroundColor, setBackgroundColor] = useState('#2AB572');
  /*
  const updateBackgroundColor = () => {
    if (quant) {
      setBackgroundColor('red');
    }
    if (quant == 1) {
      setBackgroundColor('yellow');
    }
  }*/
  
  return (
    <div className="containerLivro">
      <div className="livro">
        <div className="info">
          <p className="livroTitulo">
          {titulo}
          </p>
          <p className="livroAutor">
          {autor}
          </p>
        </div>
      </div>
      <div className="livroStatus" style={{ backgroundColor }}>
        <p className="availability">
          Disponível
        </p>
        <p className="livroQuant">
        {quant}
        </p>
      </div>
    </div>
    
  )
}

export default CardLivro