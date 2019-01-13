import React from 'react';

const Card = ({name,email}) => {
	return(
			<div className = 'tc bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
				
				 <img src={`https://robohash.org/${name}?set=set4&&size=200x200`} alt="Kittens"/>
					
					<div>	
							<h3> { name }</h3>
							<h4> { email }</h4>
					</div>
			</div>
	);
}

export default Card;