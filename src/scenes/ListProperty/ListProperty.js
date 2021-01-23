import React from 'react';
import { View } from 'react-native';
import TopProfile from './components/TopProfile/TopProfile';

import Styles from './ListPropertyStyles';

const ListProperty = () => {
    return (
        <View style={Styles.container}>
            <TopProfile />
        </View>
    )
}

export default ListProperty;