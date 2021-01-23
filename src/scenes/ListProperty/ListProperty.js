import React from 'react';
import { View } from 'react-native';
import ListTab from './components/ListTab/ListTab';
import TopProfile from './components/TopProfile/TopProfile';

import Styles from './ListPropertyStyles';

const ListProperty = () => {
    return (
        <View style={Styles.container}>
            <TopProfile />
            <ListTab />
        </View>
    )
}

export default ListProperty;