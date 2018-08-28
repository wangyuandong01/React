import React, { Component } from "react";
class Test extends Component{
   render(){
       //当父组件的render函数执行时，他的所有子组件函数都将被执行一边
           const {content}=this.props;
       return(
           <div>{content}</div>
       )
   }
}
export default Test;