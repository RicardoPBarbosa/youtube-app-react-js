const initialState = {
	videos:{},
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case 'FETCH_VIDEOS':
			return{...state, fetching: true}
			break;
		case 'FETCH_VIDEOS_REJECTED':
			return{...state, fetching: false, error: action.payload}
			break;
		case 'FETCH_VIDEOS_FULFILLED':
			return{...state, fetching: false, fetched: true, videos: action.payload}
			break;
	}

	return state;
}