import React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Interior, PhotoProfile, Property } from '../../../../Assets/Images';
import interior from '../../../../Assets/Images/interior';
import colors from '../../../../themes/colors';
import Card from '../../../../widget/Card/Card';
import TextCustom from '../../../../widget/Text/Text';

const FirstRoute = () => {
  const data = [
    {
      photo_profile: PhotoProfile.pp_male,
      name: 'Henry Scott',
      location: 'Century 21 BSD City',
      image: Property.property_2,
      property_name: 'Nava Park BSD City',
      property_price: 'Rp 6.500.000.000',
      property_type: 'Rumah',
      is_property_rented_or_sold: 'Dijual',
      property_address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
      number_of_bedrooms: '3+1',
      number_of_bathrooms: '3+1',
      surface_area: '300M',
    },
    {
      photo_profile: PhotoProfile.pp_male,
      name: 'Henry Scott',
      location: 'Century 21 BSD City',
      image: Property.property_1,
      property_name: 'Woody Residence Foresta',
      property_price: 'Rp 10.000.000 / Bulan',
      property_ownership: 'Private',
      property_type: 'Apartemen',
      is_property_rented_or_sold: 'Disewa',
      property_address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
      number_of_bedrooms: '4',
      number_of_bathrooms: '4',
      surface_area: '275M',
    },
  ]
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Card {...item} style={{alignSelf: 'center', marginBottom: 20}} />}
      keyExtractor={(_, index) => index.toString()}
      style={{
        backgroundColor: colors.greyBackground,
        paddingTop: 20,
        paddingBottom: 10,
      }}
    />
  )
};

const SecondRoute = () => {
  const data = [
    {
      photo_profile: PhotoProfile.pp_female,
      name: 'Andrea Collins',
      location: 'Century 21 BSD City',
      image: Interior.interior_1,
      property_name: 'Nava Park BSD City',
      property_price: 'Rp 6.500.000.000',
      property_type: 'Rumah',
      is_property_rented_or_sold: 'Dijual',
      property_address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
      number_of_bedrooms: '3+1',
      number_of_bathrooms: '3+1',
      surface_area: '300M',
        commission: '2%',
    },
    {
      photo_profile: PhotoProfile.pp_male_2,
      name: 'Henry Scott',
      location: 'Century 21 BSD City',
      image: Interior.interior_2,
      property_name: 'Woody Residence Foresta',
      property_price: 'Rp 10.000.000 / Bulan',
      property_ownership: 'Private',
      property_type: 'Apartemen',
      is_property_rented_or_sold: 'Disewa',
      property_address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
      number_of_bedrooms: '4',
      number_of_bathrooms: '4',
      surface_area: '275M',
      commission: '2%',
    },
  ]
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Card {...item} style={{alignSelf: 'center', marginBottom: 20}} />}
      keyExtractor={(_, index) => index.toString()}
      style={{
        backgroundColor: colors.greyBackground,
        paddingTop: 20,
        paddingBottom: 10,
      }}
    />
  )
};
const ThirdRoute = () => {
  const data = [
    {
      photo_profile: PhotoProfile.pp_male,
      name: 'Henry Scott',
      location: 'Century 21 BSD City',
      image: Property.property_2,
      property_name: 'Nava Park BSD City',
      property_price: 'Rp 6.500.000.000',
      property_type: 'Rumah',
      is_property_rented_or_sold: 'Dijual',
      property_address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
      number_of_bedrooms: '3+1',
      number_of_bathrooms: '3+1',
      surface_area: '300M',
      sold_status: 'Terjual',
      commission: '2%',
    },
    {
      photo_profile: PhotoProfile.pp_male,
      name: 'Henry Scott',
      location: 'Century 21 BSD City',
      image: Property.property_1,
      property_name: 'Woody Residence Foresta',
      property_price: 'Rp 10.000.000 / Bulan',
      property_ownership: 'Private',
      property_type: 'Apartemen',
      is_property_rented_or_sold: 'Disewa',
      property_address: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
      number_of_bedrooms: '4',
      number_of_bathrooms: '4',
      surface_area: '275M',
      sold_status: 'Tersewa',
      commission: '2%',
    },
  ]
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Card {...item} style={{alignSelf: 'center', marginBottom: 20}} />}
      keyExtractor={(_, index) => index.toString()}
      style={{
        backgroundColor: colors.greyBackground,
        paddingTop: 20,
        paddingBottom: 10,
      }}
    />
  )
};

const initialLayout = { width: Dimensions.get('window').width };

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

const ListTab = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'listing', title: 'Listing' },
      { key: 'favorite', title: 'Favorite' },
      { key: 'arsip', title: 'Arsip' },
    ]);
  
    const renderScene = SceneMap({
      listing: FirstRoute,
      favorite: SecondRoute,
      arsip: SecondRoute,
    });
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        swipeEnabled={true}
        renderTabBar={(props) => {
          return (
            <TabBar
              activeColor={colors.yellowPrimary}
              inactiveColor={colors.blackBekko}
              style={{
                backgroundColor: colors.white,
                elevation: 0,
              }}
              indicatorStyle={{
                backgroundColor: colors.yellowPrimary,
                height: 2
              }}
              renderLabel={({ route, focused, color }) => {
                return (
                <TextCustom mode="label_tab" color={color}>
                  {capitalize(route.title)}
                </TextCustom>
              )}}
              {...props}
            />
          )
        }}
      />
    );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default ListTab;