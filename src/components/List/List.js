import React, { useState, useEffect, createRef } from 'react';
import {
	CircularProgress,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({
	places,
	childClicked,
	isLoading,
	type,
	setType,
	rating,
	setRating,
}) => {
	const [elementsRefs, setElementsRefs] = useState([]);

	useEffect(() => {
		const refs = Array(places?.length)
			.fill()
			.map((_, index) => elementsRefs[index] || createRef());
		setElementsRefs(refs);
	}, [places]);

	return (
		<div className="list">
			<div className="list__title">
				Restaurants, Hotels & Attractions around you
			</div>
			{isLoading ? (
				<div className="loading">
					<CircularProgress size="5rem" />
				</div>
			) : (
				<>
					<form className="list__form">
						<InputLabel>Type</InputLabel>
						<Select
							value={type}
							onChange={(event) => setType(event.target.value)}
						>
							<MenuItem value="restaurants">Restaurants</MenuItem>
							<MenuItem value="hotels">Hotels</MenuItem>
							<MenuItem value="attractions">Attractions</MenuItem>
						</Select>
					</form>
					<form className="list__form">
						<InputLabel>Rating</InputLabel>
						<Select
							value={rating}
							onChange={(event) => setRating(event.target.value)}
						>
							<MenuItem value={0}>All</MenuItem>
							<MenuItem value={3}>Above 3.0</MenuItem>
							<MenuItem value={4}>Above 4.0</MenuItem>
							<MenuItem value={4.5}>Above 4.5</MenuItem>
						</Select>
					</form>
					<Grid container spacing={3} className="list__list">
						{places?.map((place, index) => (
							<Grid item key={index} xs={12}>
								<PlaceDetails
									place={place}
									selected={Number(childClicked) === index}
									refProp={elementsRefs[index]}
								/>
							</Grid>
						))}
					</Grid>
				</>
			)}
		</div>
	);
};

export default List;
