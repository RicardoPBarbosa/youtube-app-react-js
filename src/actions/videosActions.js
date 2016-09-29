import axios from 'axios';

export function fetchVideos(query){
	const apiKey = '';
	const maxRes = 10;
	let api = 'https://www.googleapis.com/youtube/v3/search';
	api = `${api}?part=snippet&q=${query}&maxResults=${maxRes}&order=viewCount&type=video&key=${apiKey}`;
	return function(dispatch){
		axios.get(api)
		.then((response) => {
			dispatch({type: 'FETCH_VIDEOS_FULFILLED', payload: response})
		})
		.catch((err) => {
			dispatch({type: 'FETCH_VIDEOS_REJECTED', payload: err})
		})
	}
}
