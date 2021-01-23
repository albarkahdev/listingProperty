import React from 'react';
import { ScrollView } from 'react-native';
import ListTab from './components/ListTab/ListTab';
import TopProfile from './components/TopProfile/TopProfile';

import Styles from './ListPropertyStyles';

const ListProperty = () => {
    return (
        <ScrollView style={Styles.container}>
            <TopProfile />
            <ListTab />
        </ScrollView>
    )
}

export default ListProperty;