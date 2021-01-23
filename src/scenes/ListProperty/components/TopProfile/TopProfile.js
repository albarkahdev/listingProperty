import React from 'react';
import { View, Image } from 'react-native';
import {PhotoProfile} from '../../../../Assets/Images';
import colors from '../../../../themes/colors';
import TextCustom from '../../../../widget/Text/Text';
import Styles from './TopProfileStyles';

const Avatar = ({source, size}) => {
    return (
        <View style={{
            height: size,
            width: size,
            padding: 3.3,
            borderRadius: (size / 2),
            borderColor: colors.yellowPrimary,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image source={source} resizeMode="cover" style={{height: (size - 6.6), width: (size - 6.6)}} />
        </View>
    )
}

const TopProfile = () => {
    return (
        <View style={Styles.container}>
            <Avatar size={70} source={PhotoProfile.pp_male} />
            <TextCustom mode="title" style={{marginTop: 8}}>Henry Scott</TextCustom>
            <TextCustom mode="description">Member Broker Century 21 BSD City</TextCustom>
        </View>
    )
}

export default TopProfile;