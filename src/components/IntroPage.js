import React from 'react';

export default class IntroPage extends React.Component{
	componentDidMount(){
		$(".introPage").addClass('animated fadeIn');
	}

	render(){
		return(
			<div className="introPage">
				<img src="img/yt.png" width="175px" height="65px"/>
				<button className="transition" onClick={this.changePage.bind(this, 'search')}>Search Videos</button>
			</div>
		)
	}

	changePage(page){
		$(".searchPage").addClass('animated fadeIn');
		$(".introPage").removeClass('animated fadeIn');
		$(".searchPage").css("display", "block");
		$("#searchVideo").focus();
		return false;
	}
}