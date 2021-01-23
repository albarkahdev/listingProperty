import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../../../../themes/colors';
import Card from '../../../../../widget/Card/Card';

const ListingTab = () => {
    return (
        <View style={Styles.container}>
            <Card />
        </View>
    );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBackground,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center'
  },
});

export default ListingTab;