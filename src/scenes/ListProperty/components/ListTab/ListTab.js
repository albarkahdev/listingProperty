import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from '../../../../themes/colors';
import TextCustom from '../../../../widget/Text/Text';
import ListingTab from '../Tabs/ListingTab/ListingTab';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

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
      listing: ListingTab,
      favorite: SecondRoute,
      arsip: FirstRoute,
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