import React,{Component} from 'react'
class Button extends Component{
    push=this.push.bind(this);
    push(){
        return this.props.Add();
    }

    render(){
        return(
            <button onClick={this.push}>add</button>
        )

    }
}
export default Button;