import React, { Component } from 'react'
class App extends Component {
    constructor(props){
       super(props);
       this.state={
           list:[],
           inputValue:''
       };
       this.handleAdd=this.handleAdd.bind(this);
       this.handleChange=this.handleChange.bind(this);


    }
    handleAdd() {
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
    delete(index){
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
                <button onClick={this.handleAdd}>add</button>
            </div>
            <ul>
                {this.state.list.map((item,index)=>{
                    return <li onClick={this.delete.bind(this,index)} key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
  }

}

export default App;
