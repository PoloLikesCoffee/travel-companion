import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import mapStyles from './mapStyles';

const Map = ({
	setCoordinates,
	setBounds,
	coordinates,
	places,
	setChildClicked,
}) => {
	const isDesktop = useMediaQuery('(min-width:600px)');

	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={{
					disableDefaultUI: true,
					zoomControl: true,
					styles: mapStyles,
				}}
				onChange={(event) => {
					setCoordinates({ lat: event.center.lat, lng: event.center.lng });
					setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
				}}
				onChildClick={(child) => {
					setChildClicked(child);
				}}
			>
				{places?.map((place, index) => (
					<div
						className="map__marker"
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
						key={index}
					>
						{!isDesktop ? (
							<LocationOnOutlinedIcon color="primary" fontSize="large" />
						) : (
							<div className="map__card">
								<div className="map__card__title">{place.name}</div>
								<img
									className="map__card__img"
									src={
										place.photo
											? place.photo.images.large.url
											: 'https://source.unsplash.com/1600x900/?restaurant'
									}
									alt={place.name}
								/>
								<Rating size="small" value={Number(place.rating)} readOnly />
							</div>
						)}
					</div>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
