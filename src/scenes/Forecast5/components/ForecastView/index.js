import React from 'react';
import Loading from 'components/Loading';
import Item from './components/Item';
import './index.scss';

const formatCityName = cityName => {
	const data = cityName.split(',');
	const city = data[0].substring(0, 1).toUpperCase() + data[0].substring(1);
	return `${city}, ${data[1].toUpperCase()}`;
}

const ForecastView = props => (
	<div className="ForecastView">
		<div className="city-name">
			<span>{formatCityName(props.cityName)}</span>
		</div>
		<div className="reload">
			<button
				onClick={props.onPressRefresh}
				disabled={props.loading}
			>
				Refresh
			</button>
		</div>
		{props.loading ? (
			<Loading />
		) : (
			<div className="forecast-day">
				{props.forecast.map((item, index) => (
					<Item
						key={index}
						{...item}
					/>
				))}
			</div>
		)}
	</div>
);

export default ForecastView;
