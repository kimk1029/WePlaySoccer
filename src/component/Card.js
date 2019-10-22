import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    width: 305,
    height: 140,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    marginTop: 12,
    marginBottom: 12,
    marginRight: 35,
    marginLeft: 35,
  },
};

export default Card;
