import React, {Component} from 'react';
import Main from '../template/Main'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { database } from '../../firebase';


class Dashboard extends Component{

    componentDidMount () {
        this.setState({ isLoading: true })
        this.data = database.ref('params');
        this.data.on('value', snapshot =>{
          this.setState({data: snapshot.val(),
          isLoading:false});
      
        })
      }
      
      state = {
          data: [],
          isLoading:false,
          option:"",
      };

      handleSis = event =>{
        this.setState({
            option: event.target.value,
          })
        }
    render(){
        return(
    <Main icon="area-chart" title="Dashboard"
        subtitle="Dados do laboratório">
        <div className='display-4'>Gráficos</div>
        <hr />
        <Form inline>
         <FormGroup>
           <Label>Selecione o Sistema a ser analisado:  </Label>
            <Input required type="select"  value={this.state.option} onChange={this.handleSis}>
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
    </Form>
        {console.log("Olá, atualmente o seletoe está na opção ")}
        {this.state.isLoading && <p>Carregando</p>}
        {console.log(this.state)}
    </Main>
        )
    }
}
export default Dashboard