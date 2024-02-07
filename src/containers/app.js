import React, {Component} from 'react';
import CardArray from '../components/cardarray';
import SearchBox from '../components/searchbox';
import './app.css'; 
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/errorboundary';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchField: '' 
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) 
            .then(users => this.setState({ robots: users }));
    }
    
            
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
       
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
             <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1 '>RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardArray robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
        }
    
}



export default App