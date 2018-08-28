import React ,{Component} from 'react'
import PropTypes from "prop-types"
class ToList extends Component{
//子组件向父组件传值，子组件调用父组件传递过来的方法
    
  constructor(props){
   super(props)
  this.handleCancle=this.handleCancle.bind(this);
  }
    handleCancle(){
        const {Remove,index}=this.props
     return   Remove(index)
    }
    
    render(){
        const {content,test}=this.props
      return (
          <li onClick={this.handleCancle}>{test}-{content}</li>
      )
    }
}
    ToList.defaultProps={
        test:"helloWorld"
    }
   ToList.propTypes={
    test:PropTypes.string,
    index:PropTypes.number,
    content:PropTypes.string
    }
export default ToList;