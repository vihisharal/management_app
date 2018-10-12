import React, { Component } from 'react'

class Test extends Component {

  state ={
    title:'',
    body:''
  };

  componentDidMount(){
    console.log('componentDidMount...');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
      title:data.title,
      body:data.body
    }))
    .then(()=>{console.log(this.state); return false;});
    

  }
/*   componentWillMount(){
    console.log('componentWillMount...');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate...');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate...');
  }
  componentWillReceiveProps(nextProps,nextState){
    console.log('componentWillReceiveProps...');
  }    
  getDerivedStateFromProps(nextProps,nextState){
    return {
      test: "somthing"
    }
  }
  getSnapshotBeforeUpdate(nextProps,nextState){
    console.log('getSnapshotBeforeUpdate...');
  } */

  render() {
    const {title,body} = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  }
}
export default Test;