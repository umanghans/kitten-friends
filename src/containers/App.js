import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super()
		this.state = {
			kittens: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json()).then(users => this.setState({kittens: users}));
	}

	onTextInput = (event) =>{
		this.setState({searchField: event.target.value})
	}

	render(){
		const {kittens, searchField} = this.state;
		const filteredResults = kittens.filter( kitten => {
			return kitten.name.toLowerCase().includes(searchField.toLowerCase());
		})
		
		if(!kittens.length){
			return <h1>Loading...</h1>
		}
		else{
			return(
				<div className = 'tc'>
					<h1 className = 'f1'>Kitten Friends</h1>
					<SearchBox textInput={this.onTextInput}/>
					<Scroll>
						<CardList kittens = {filteredResults} />
					</Scroll>
				</div>

			);
		}
	}
}

export default App;