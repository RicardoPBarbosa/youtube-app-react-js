import React from 'react';

export default class Result extends React.Component{
	render(){
		const videoId = this.props.result.id.videoId;

		return(
			<div className="result">
				<iframe src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0"></iframe>
			</div>
		)
	}
}