import React, { Component } from 'react'
import Button from './Button'
import ToList from  "./ToList"
class App extends Component {
    constructor(props){
       super(props);
       this.state={
           list:[],
           inputValue:''
       };
       // this.handleAdd=this.handleAdd.bind(this);
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
      return (
        <div>
            <div>
                <input value={this.state.inputValue} onChange={this.handleChange} type="text"/>
            </div>

            <Button Add={this.readd}  />
            <ul>
                {this.state.list.map((item,index)=>{
                    // return <li onClick={this.delete.bind(this,index)} key={index}>{item}</li>
                    //父组件通过属性的方式将参数传递给子组件，自组件通过this.props.content的方式接受父组件的传值
                    return <ToList Remove={this.handleRemove} key={index} content={item} index={index}/>
                })}
            </ul>
        </div>
    )
  }

}

export default App;
