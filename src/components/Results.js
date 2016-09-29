import React from 'react';
import Result from './Result';

export default class Results extends React.Component{
	render(){
		const {results} = this.props;
		if(results != ''){
			return(
				<div className="results">
					{
						this.props.results.map((result, i) => {
							return <Result result={result} key={i} />
						})
					}
				</div>
			)
		}else{
			return(
				<div className="noResults">
					<i className="fa fa-exclamation-circle"></i>
					Não foram encontrados resultados
				</div>
			)
		}
	}
}