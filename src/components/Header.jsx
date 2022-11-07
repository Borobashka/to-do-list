import React from 'react'
import logoSvg from '../assets/img/Logo.svg'
import userAvatar from '../assets/img/header__avatar.png'

function Header() {
  return (
    <div className="header">
    <div className="container">
      <div className="header__logo">
        <img width="60" src={logoSvg} alt="To do logo"/>
        <div>
            <h1>ToDoList</h1>
        </div>
      </div>
      <div className="header__user">
        <h1>Хорошего дня, username</h1>
        <img width="75" src={userAvatar} alt="User img"/>
      </div>
    </div>
    </div>
  )
}

export default Header