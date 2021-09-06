import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ setCoordinates }) => {
	const [autoComplete, setAutoComplete] = useState(null);

	const onLoad = (autoC) => {
		setAutoComplete(autoC);
	};

	const onPlaceChanged = () => {
		const lat = autoComplete.getPlace().geometry.location.lat();
		const lng = autoComplete.getPlace().geometry.location.lng();

		setCoordinates({ lat, lng });
	};

	return (
		<div className="header">
			<div className="header__bar">
				<div className="header__title1">Travel Companion</div>
				<div className="header__right">
					<div className="header__title2">Explore new places</div>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
						<div className="header__search">
							<div className="header__search__icon">
								<SearchIcon />
							</div>
							<div className="header__search__inputContainer">
								<input
									placeholder="Search…"
									className="header__search__inputContainer__input"
								/>
							</div>
						</div>
					</Autocomplete>
				</div>
			</div>
		</div>
	);
};

export default Header;
