import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import colors from '../../themes/colors';
import ButtonAction from './components/ButtonAction/ButtonAction';
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import ImageCard from './components/ImageCard/ImageCard';
import TopCard from './components/TopCard/TopCard';


const WIDTH = Dimensions.get('window').width;

const Card = props => {
  const {
    photo_profile, name, location, image, sold_status, commission, property_name, property_price,
    property_ownership, property_type, is_property_rented_or_sold, property_address, number_of_bedrooms,
    number_of_bathrooms, surface_area, style
  } = props
    return (
        <View style={[Styles.container, style]}>
            <TopCard
              photo_profile={photo_profile}
              name={name}
              location={location}
            />
            <ImageCard
              image={image}
              sold_status={sold_status}
              commission={commission}
            />
            <DescriptionCard
              property_name={property_name}
              property_price={property_price}
              property_ownership={property_ownership}
              property_type={property_type}
              is_property_rented_or_sold={is_property_rented_or_sold}
              property_address={property_address}
            />
            <ButtonAction
              number_of_bedrooms={number_of_bedrooms}
              number_of_bathrooms={number_of_bathrooms}
              surface_area={surface_area}
            />
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