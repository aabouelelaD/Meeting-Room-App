import React from 'react';
import { Text as BaseText, View } from 'react-native';

 const TextComponent = () => {
  return (
    <View>
      <BaseText>Button</BaseText>
    </View>
  );
};


export const Text = React.memo(TextComponent)