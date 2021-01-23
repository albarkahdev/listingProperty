import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import colors from '../../../../themes/colors';
import TextCustom from '../../../Text/Text';

const ButtonAction = ({number_of_bedrooms, number_of_bathrooms, surface_area}) => {
  	return (
		<View style={{flexDirection: 'row', paddingVertical: 7}}>
			<TouchableOpacity style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRightWidth: 1, borderRightColor: colors.greyLine}}>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
					<View style={{width: 20, height: 20, backgroundColor: '#747474', marginRight: 7}} />
					<TextCustom mode="description_action_button">{number_of_bedrooms}</TextCustom>
				</View>
				<TextCustom mode="label_action_button">K. Tidur</TextCustom>
			</TouchableOpacity>
			<TouchableOpacity style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRightWidth: 1, borderRightColor: colors.greyLine}}>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
					<View style={{width: 20, height: 20, backgroundColor: '#747474', marginRight: 7}} />
					<TextCustom mode="description_action_button">{number_of_bathrooms}</TextCustom>
				</View>
				<TextCustom mode="label_action_button">K. Mandi</TextCustom>
			</TouchableOpacity>
			<TouchableOpacity style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5}}>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
					<View style={{width: 20, height: 20, backgroundColor: '#747474', marginRight: 7}} />
					<TextCustom mode="description_action_button">{surface_area}</TextCustom>
				</View>
				<TextCustom mode="label_action_button">L. Tanah</TextCustom>
			</TouchableOpacity>
		</View>
	);
}

export default ButtonAction;