import React, {useState, useEffect} from 'react';
import CardArray from '../components/cardarray';
import SearchBox from '../components/searchbox';
import './app.css'; 
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/errorboundary';

function App(){

    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => {setRobots(users)});
    },[])
    
    const onSearchChange = (event) => {
        setSearchField(event.target.value)
       
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
             <h1>Loading</h1> :
        (
        <div className='tc'>
            <h1 className='f1 '>RoboFriends</h1>
            <SearchBox searchChange= {onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardArray robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
        );
        
    
}


export default App