import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { database } from '../firebase';
import Dashboard from  '../components/dashboard/Dashboard'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Insert from '../components/insert/Insert'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Tool from '../components/tool/Tool'
import Login from '../components/login/Login'


class App extends Component {


//função para enviar o comentário sendo que o parâmetro da função já é passado direto
sendParam = data =>{
    const id = database.ref().child('parametros').push().key;
    const parametros = {}
    parametros['parametros/'+id] = { 
      data
    }
    database.ref().update(parametros)
    }
    // função que repete toda vez que a aplicação for iniciada, no caso ela capta o comments 
    // de dentro do Firebase e passa para o estado da aplicação.
   

render(){
    return(
        <BrowserRouter >
            <div className="app">
                <Logo />
                <Nav />   
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/dimensionamento' component={Tool} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/inserir' render={(props) => <Insert {...props} sendParam={this.sendParam}/>} />
                        <Redirect from='*' to='/' />
                    </Switch>
                <Footer  />
            </div>
        </BrowserRouter>
        )
        }    
                                    }
                                    
export default App