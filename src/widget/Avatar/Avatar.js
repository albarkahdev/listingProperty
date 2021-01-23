import React from 'react';
import { View, Image } from 'react-native';
import colors from '../../themes/colors';

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

export default Avatar;