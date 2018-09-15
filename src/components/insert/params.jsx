import React, {Component} from 'react';
import Param from './param'

class Params extends Component {
    render(){
        const keys = Object.keys(this.props.data);
            return(
                <div>
                    {keys.map( key=> <Param key={key} c={this.props.Params[key]}/> )}
                </div>
            )
    }
}
export default Params