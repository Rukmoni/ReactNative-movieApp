import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { colors, images } from '../constants';

import mockData from '../mockdata/data';

const HorizontalScroller = ({ dataset }) => {
  const dataArray = Object.values(mockData[dataset]);

  return (
    <FlatList
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        const renderItem = item.image ? (
          <Image source={images[item.image]} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        );

        return <View style={styles.container}>{renderItem}</View>;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

HorizontalScroller.defaultProps = {
  dataset: 'dumbData'
};

HorizontalScroller.propTypes = {
  // optional
  dataset: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 130,
    marginRight: 8,
    overflow: 'hidden',
    width: 93
  },
  placeholder: {
    backgroundColor: colors.infoGrey,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%'
  }
});

export default HorizontalScroller;
