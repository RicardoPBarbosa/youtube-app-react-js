import React from 'react';
import {connect} from 'react-redux';

import IntroPage from './IntroPage';
import SearchForm from './SearchForm';
import Results from './Results';

import {fetchVideos} from '../actions/videosActions';

@connect((store) => {
	return{
		videos: store.videos.videos
	};
})

export default class App extends React.Component{
	render(){
		const {videos} = this.props;
		if(Object.keys(videos).length != 0){
			var searchResults = <Results results={videos.data.items} />
		}
		return(
			<div>
				<IntroPage />
				<div className="searchPage">
					<div>
						<SearchForm onSearchMade={this.onSearchMade.bind(this)} />
						{searchResults}
					</div>
				</div>
				<a className="transition" target="_blank" href="https://github.com/RicardoPBarbosa"><i className="fa fa-github" aria-hidden="true"></i> Visit my GitHub</a>	
			</div>
		)
	}

	onSearchMade(search){
		this.props.dispatch(fetchVideos(search));
	}
}