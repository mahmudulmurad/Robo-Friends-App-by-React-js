import React ,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
import '../containers/App.css';
import ErrorBoundry from '../components/Errorboundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
        robots : [],
        searchfield : ''
    }   
   }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({ robots:users }));
  }
  onsearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
  }

  render() {
      const {robots,searchfield}=this.state;
      const filterrobots=robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
     
     return !robots.length ?
      <h1>LOADING</h1> :
      (
      <div className='tc'>
        <h1 className='f2'>ROBO-FRIENDS</h1>
        <SearchBox  searchChange={this.onsearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filterrobots} />
          </ErrorBoundry>
        </Scroll>
      </div> 
        );
     }   
}

export default App;
