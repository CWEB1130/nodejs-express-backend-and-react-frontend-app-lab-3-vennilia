import React, { Component } from 'react';


class Offers extends Component {

  state = { offers: [] }
  

  componentDidMount(){
	fetch('/offers')
	  .then(res => res.json())
	  .then(offers => this.setState( { offers }));
  }

  render(){
	return (
	  <div>
		{this.state.offers.map(aoffer =>
		<section className="aoffer" key={aoffer.id} >
		  <h5>{aoffer.property}</h5>
		  <h5>{aoffer.offer_exp}</h5>
		  <h6>Offer Details</h6>
		  <p>{aoffer.offer_details}</p>
		</section>
		)}
	  </div>
	);
  }
}

export default Offers;