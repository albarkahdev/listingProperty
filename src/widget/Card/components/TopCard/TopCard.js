import React from 'react';
import { View } from 'react-native';
import { PhotoProfile } from '../../../../Assets/Images';
import Avatar from '../../../Avatar/Avatar';
import TextCustom from '../../../Text/Text';

// import { Container } from './styles';

const TopCard = () => {
    return (
        <View style={{flexDirection: 'row', paddingHorizontal: 13, paddingVertical: 7, justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <Avatar size={44} source={PhotoProfile.pp_male} />
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                    <TextCustom mode="title" position="left">Henry Scott</TextCustom>
                    <TextCustom mode="sub_titile_card" position="left">Century 21 BSD City</TextCustom>
                </View>
            </View>
            <View style={{backgroundColor: 'black', width: 44, height: 44, borderRadius: 44}} />
        </View>
    );
}

export default TopCard;