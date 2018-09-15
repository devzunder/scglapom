import React, {Component} from 'react';

class Param extends Component{
    render(){
        return(
            <div>Parâmetro : {this.props.c.param}</div>
        )
    }
}
export default Param