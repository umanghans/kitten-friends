import React from 'react';


const SearchBox = ({searchField,textInput}) => {

	return(
		<div className = 'pa2'>
			
			<input 
			className = 'pa3 ba b--green bg-lightest-blue'
			type  = 'search'
			placeholder = 'Search Kittens'
			onChange = {textInput}
			/>
					
		</div>
	);
}

export default SearchBox;