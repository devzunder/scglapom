import React, { Component } from 'react'

import Main from '../template/Main'


export default class Tool extends Component {
render(){
    return(
        <Main icon="calculator" title="Dimensionamento"
        subtitle="Ferramenta para o dimensionamento de sistemas para o LAPOM">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Esse sistema foi desenvolvido para obtenção do título de Engenheiro de Aquicultura
         pelo aluno Lucas de Andrade Zunder, para demonstrar os mais diversos caminhos que esse profissional
         pode seguir. </p>
         </Main>
    )
}}
   