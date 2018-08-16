import React ,{Component} from 'react'
class ToList extends Component{
//子组件向父组件传值，子组件调用父组件传递过来的方法
    handleCancle=this.handleCancle.bind(this)
    handleCancle(){
     return   this.props.Remove(this.props.index)
    }
    render(){
      return (
          <li onClick={this.handleCancle}>{this.props.content}</li>
      )
    }
}
export default ToList;