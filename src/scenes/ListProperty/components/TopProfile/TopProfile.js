import React from 'react';
import { View } from 'react-native';
import {PhotoProfile} from '../../../../Assets/Images';
import Avatar from '../../../../widget/Avatar/Avatar';
import TextCustom from '../../../../widget/Text/Text';
import Styles from './TopProfileStyles';

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