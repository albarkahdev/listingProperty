import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import { Property } from '../../../../Assets/Images';
import colors from '../../../../themes/colors';
import TextCustom from '../../../Text/Text';

const WIDTH = Dimensions.get('window').width;

// import { Container } from './styles';

const ImageCard = () => {
    return (
        <View>
            <Image source={Property.property_2} resizeMode='cover' style={{width: undefined, height: 131}} />
            <View style={{position: 'absolute', right: 9, bottom: 7, backgroundColor: colors.yellowPrimary, width: 65, height: 41, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <TextCustom mode="sub_titile_card" color={colors.white} position="left">Komisi</TextCustom>
                <TextCustom mode="promo_text" color={colors.white}>2%</TextCustom>
            </View>
            <View style={{position: 'absolute', left: (WIDTH * 0.5) - 60, top: 37, backgroundColor: '#FFFFFFE6', width: 120, height: 36, borderRadius: 5, transform: [{rotate: '-18deg'}]}}>
                <View style={{flex: 1, borderStyle: 'dashed', borderColor: colors.yellowPrimary, borderWidth: 2, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                    <TextCustom mode="text_sold">TERJUAL</TextCustom>
                </View>
            </View>
        </View>
    );
}

export default ImageCard;