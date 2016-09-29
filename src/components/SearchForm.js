import React from 'react';

export default class SearchForm extends React.Component{
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<i className="fa fa-search"></i><input id="searchVideo" type="text" ref="search" placeholder="Search Youtube" autoComplete="off"/>
				</form>
			</div>
		)
	}

	onSubmit(e){
		e.preventDefault();
		let search = this.refs.search.value;
		this.refs.search.value = '';
		this.props.onSearchMade(search);
	}
}