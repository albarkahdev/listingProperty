import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import colors from '../../themes/colors';
import ButtonAction from './components/ButtonAction/ButtonAction';
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import ImageCard from './components/ImageCard/ImageCard';
import TopCard from './components/TopCard/TopCard';


const WIDTH = Dimensions.get('window').width;

const Card = () => {
    return (
        <View style={Styles.container}>
            <TopCard />
            <ImageCard />
            <DescriptionCard />
            <ButtonAction />
        </View>
    );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: WIDTH * (11/12),
    elevation: 3
  },
});

export default Card;