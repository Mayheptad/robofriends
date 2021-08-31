import { Component } from 'react';

class Errorboundary extends Component{
constructor(props){
    super(props);
    this.state = {hasError:false}
   }

componentDidCatch(){
this.setState({hasError:true});
}

   render(){
return this.state.hasError ? <h1>Something went wrong, Try again Later</h1> :
 this.props.children;
   }
}

export default Errorboundary;