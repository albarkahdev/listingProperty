import React from 'react';
import { View } from 'react-native';
import colors from '../../../../themes/colors';
import TextCustom from '../../../Text/Text';

// import { Container } from './styles';

const DescriptionCard = () => {
	return (
		<View style={{paddingHorizontal: 10, paddingVertical: 5}}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7}}>
				<TextCustom mode="title_description_card">B Residence BSD Signature Lotus …</TextCustom>
				<View style={{backgroundColor: colors.blackBekko, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 3, justifyContent: 'center'}}>
					<TextCustom mode="ownership_property" color={colors.white}>PRIVATE</TextCustom>
				</View>
			</View>
			<TextCustom mode="price_property">Rp 4.000.000 / Bulan</TextCustom>
			<View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 3}}>
				<TextCustom mode="type_property">Apartemen</TextCustom>
				<View style={{backgroundColor: colors.green, borderRadius: 2, paddingHorizontal: 7, paddingVertical: 2.5, marginLeft: 12}}>
					<TextCustom mode="is_rented_property" color={colors.white}>Disewa</TextCustom>
				</View>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: colors.greyLine}}>
				<View style={{width: 7, height: 9, backgroundColor: colors.grey, marginRight: 6}} />
				<TextCustom mode="address_property" color={colors.grey}>Jl. Edutown Kav III.1, BSD, Tangerang Selatan</TextCustom>
			</View>
		</View>
	);
}

export default DescriptionCard;