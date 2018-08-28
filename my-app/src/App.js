import React, { Component} from 'react'
import Button from './Button'
import ToList from  "./ToList"
import "./index.css"
import Test from "./Test"
class App extends Component {
    constructor(props){
       super(props);
       this.state={
           list:[],
           inputValue:''
       };
       this.handleChange=this.handleChange.bind(this);
       this.handleRemove=this.handleRemove.bind(this);
       this.readd=this.readd.bind(this);

    }
    readd() {
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
            }
        );
        }
    handleChange(e){
        this.setState({
            inputValue:e.target.value,

        });

    }
    // delete(index){
    //     const list2=[...this.state.list];
    //         list2.splice(index,1);
    //   this.setState({
    //    list:list2
    //   })
    // }
    handleRemove(index){
        const list2=[...this.state.list];
        list2.splice(index,1);
        this.setState({
            list:list2
     })
    }

    render() {
        //render函数用来渲染页面，当组件的state、props发生改变时，render函数就会重新执行
      return (
        <div>
            <div>
                <label className="cont" htmlFor="inputValue" >
                 请输入要完成的内容
                </label>
                <input id="inputValue" className="input"
                 value={this.state.inputValue} 
                 onChange={this.handleChange}
                  type="text"/>
                {/* <Input Change={this.handleChange} value={this.state.inputValue} /> */}
                <Button className="cont" Add={this.readd}/>
            </div>
            <ul>
                {this.getTodoItem()}
            </ul>
            <Test content={this.state.inputValue}/>
        </div>
    )
    
  }
  getTodoItem(){
      return this.state.list.map((item,index)=>{
            // return <li onClick={this.delete.bind(this,index)} key={index}>{item}</li>
            //父组件通过属性的方式将参数传递给子组件，自组件通过this.props.content的方式接受父组件的传值
            return <ToList className="cont" Remove={this.handleRemove} key={index} content={item} index={index}/>
        })
      
  }

}

export default App;
