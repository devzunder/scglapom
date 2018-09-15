//importações de bibliotecas
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//importação de componente
import Main from '../template/Main'

//---------------------------------------------------------------------------------


//                          Estilo da página
const headerProps = {
    icon: 'thermometer',
    title: 'Inserir Medições',
    subtitle: 'Selecione o Sistema, e preencha os parâmetros'
}
//                          Componente
export default class Insert extends Component { 


//                          Estado do componente
    state = {
        date:"",
        sistema:"",    
        temperatura:"",
        oxigenio:"",
        ph:"",
        amonia:"",
        observacoes:"",
    }

//                         Método para coletar a data da postagem
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleDateString()
        }
    }

//                          Eventos Handler
handleSis = event =>{
    this.setState({
      sistema: event.target.value,
    })
  }
handleTem = event =>{
    this.setState({
      temperatura: event.target.value,
    })
  }
handleOx = event =>{
    this.setState({
      oxigenio: event.target.value,
    })
  }
handlePh = event =>{
    this.setState({
      ph: event.target.value,
    })
  }
handleAmo = event =>{
    this.setState({
      amonia: event.target.value,
    })
  }
handleObs = event =>{
    this.setState({
      observacoes: event.target.value,
    })
  }

//                          Funções
  sendParam = () => {
    this.props.sendParam(this.state)
    this.setState({
        sistema:" ",    
        temperatura:" ",
        oxigenio:"",
        ph:"",
        amonia:"",
        observacoes:"",
      })  
  }


//                              Formulário
render(){
    return(
<div>
<Main {...headerProps}>
<Form inline>
  <FormGroup>
      <Label>Selecione o Sistema  </Label>
      <Input required type="select"  value={this.state.sistema} onChange={this.handleSis}>
          <option></option>
          <option>Tanque 1</option>
          <option>Tanque 2</option>
          <option>Tanque 3</option>
          <option>Neon</option>
          <option>Cavalos</option>
          <option>Gramma</option>
          <option>Centropyge</option>
      </Input>
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">Temperatura</Label>
      <Input required value={this.state.temperatura} onChange={this.handleTem}type="number" placeholder="25ºC" />
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">Oxigênio</Label>
      <Input required value={this.state.oxigenio} onChange={this.handleOx}type="number" name="password" id="examplePassword" placeholder="6.0 mg/L" />
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">pH</Label>
      <Input required value={this.state.ph} onChange={this.handlePh}type="number" name="password" id="examplePassword" placeholder="7" />
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">Amônia</Label>
      <Input required value={this.state.amonia} onChange={this.handleAmo}type="number" name="password" id="examplePassword" placeholder="0" />
  </FormGroup>
  <FormGroup className="mb-2 mr-sm-2 mb-sm-">
      <Label for="examplePassword" className="mr-sm-2">Observações</Label>
      <Input required value={this.state.observacoes} onChange={this.handleObs}type="textarea" name="password" id="examplePassword" placeholder="O que foi observado" />
  </FormGroup>
  <Button onClick={this.sendParam} >Submit</Button>
</Form>
{console.log(this.state)}
</Main>
</div>
)
}
}