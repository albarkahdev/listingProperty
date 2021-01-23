import React from 'react';
import { View } from 'react-native';
import Avatar from '../../../Avatar/Avatar';
import TextCustom from '../../../Text/Text';

const TopCard = ({photo_profile, name, location}) => {
    return (
        <View style={{flexDirection: 'row', paddingHorizontal: 13, paddingVertical: 7, justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <Avatar size={44} source={photo_profile} />
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                    <TextCustom mode="title" position="left">{name}</TextCustom>
                    <TextCustom mode="sub_titile_card" position="left">{location}</TextCustom>
                </View>
            </View>
            <View style={{backgroundColor: 'black', width: 44, height: 44, borderRadius: 44}} />
        </View>
    );
}

export default TopCard;