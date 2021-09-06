import React from 'react';
import {
	Box,
	Typography,
	Button,
	CardMedia,
	CardActions,
	Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

const PlaceDetails = ({ place, selected, refProp, key }) => {
	if (selected)
		refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

	return (
		<div className="details__card" ref={refProp}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: 'https://source.unsplash.com/1600x900/?restaurant'
				}
				title={place.name}
			/>
			<div className="details__card__content">
				<div className="details__card__content__title">{place.name}</div>
				<Box display="flex" justifyContent="space-between">
					<Rating value={Number(place.rating)} readOnly />
					<Typography gutterBottom variant="subtitle1">
						out of {place.num_reviews} reviews
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Price</Typography>
					<Typography gutterBottom variant="subtitle1">
						{place.price_level}
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Ranking</Typography>
					<Typography gutterBottom variant="subtitle1">
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map((award) => (
					<Box my={1} display="flex" justifyContent="space-between">
						<img src={award.images.small} alt={award.display_name} />
						<Typography variant="subtitle2" color="textSecondary">
							{award.display_name}
						</Typography>
					</Box>
				))}
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size="small" label={name} className="chip" />
				))}
				{place?.address && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className="address"
					>
						<LocationOnIcon /> {place.address}
					</Typography>
				)}
				{place?.phone && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className="phone"
					>
						<PhoneIcon /> {place.phone}
					</Typography>
				)}
				<div className="btn__container">
					<Button
						size="small"
						color="primary"
						onClick={() => window.open(place.web_url, '_blank')}
					>
						Trip Advisor
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={() => window.open(place.website, '_blank')}
					>
						Website
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PlaceDetails;
