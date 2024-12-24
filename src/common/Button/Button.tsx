import React from 'react';
import { Text, View } from 'react-native';

export const ButtonComponent = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export const Button = React.memo(ButtonComponent);
