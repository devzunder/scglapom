import React, {Component} from 'react'
import './login.css'
import logo from '../../assets/imgs/logo.png'
export default class Login extends Component{
    render(){
        return(
            <div class="login-page">
  <div class="form">
    <form class="login-form">
        <img src={logo} width='100%'></img>
      <input type="text" placeholder="Usuário"/>
      <input type="password" placeholder="Senha"/>
      <button>Entrar</button>
    </form>
  </div>
</div>
        )
    }
}