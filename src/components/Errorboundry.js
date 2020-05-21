import React,{Component} from 'react';
class Errorboundry extends Component{
	constructor(props){
		super(props)
		this.state={
		hasError:false
		}
	}
	componentDidCatch(error,info){
		this.setState({hasError:true})
	}

	render(){
		if(this.state.hasError){
			return <h1>Has error</h1>;
		}
		else return this.props.children
		
		
	}
}
export default Errorboundry;