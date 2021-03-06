import React from 'react';
import { View } from 'react-native';
import colors from '../../../../themes/colors';
import TextCustom from '../../../Text/Text';

// import { Container } from './styles';

const DescriptionCard = props => {
	const {
	  property_name, property_price, property_ownership, property_type, is_property_rented_or_sold, property_address
	} = props
	return (
		<View style={{paddingHorizontal: 10, paddingVertical: 5}}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7}}>
				<TextCustom mode="title_description_card">{property_name}</TextCustom>
				{property_ownership && (<View style={{backgroundColor: colors.blackBekko, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 3, justifyContent: 'center'}}>
					<TextCustom mode="ownership_property" color={colors.white}>{property_ownership}</TextCustom>
				</View>)}
			</View>
			<TextCustom mode="price_property">{property_price}</TextCustom>
			<View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 3}}>
				<TextCustom mode="type_property">{property_type}</TextCustom>
				<View style={{backgroundColor: is_property_rented_or_sold === 'Disewa' ? colors.green : colors.blue, borderRadius: 2, paddingHorizontal: 7, paddingVertical: 2.5, marginLeft: 12}}>
					<TextCustom mode="is_rented_property" color={colors.white}>{is_property_rented_or_sold}</TextCustom>
				</View>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: colors.greyLine}}>
				<View style={{width: 7, height: 9, backgroundColor: colors.grey, marginRight: 6}} />
				<TextCustom mode="address_property" color={colors.grey}>{property_address}</TextCustom>
			</View>
		</View>
	);
}

export default DescriptionCard;