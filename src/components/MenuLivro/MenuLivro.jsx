import React, { useState } from 'react'
import { Div, BtnFilter, ImgFilter, Ul, Li } from './styles/MenuLivroStyled.jsx'
import IconFilter from "../../assets/Sistema_-_SIBI__9_-removebg-preview.png"

const MenuLivro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  
  return (
    <>
    <Div>
    <BtnFilter onClick={toggleMenu}>
    <ImgFilter src={IconFilter}/>
    </BtnFilter>
    {isOpen && (
    <Ul>
    <Li>Todos</Li>
    <Li>Romance</Li>
    <Li>Aventura</Li>
    <Li>Fantasia</Li>
    <Li>Drama</Li>
    <Li>Suspense</Li>
    <Li>Terror/Horror</Li>
    <Li>Conto</Li>
    <Li>Poesia</Li>
    </Ul>
    /*<div>
         <option value="Todos">TODOS</option> 
         <option value="Romance">Romance</option> 
         <option value="Aventura">Aventura</option>
     </div>*/
    )}
    </Div>
    </>
  )
}

export default MenuLivro