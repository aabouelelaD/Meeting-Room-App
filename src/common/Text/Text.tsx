import React, {PropsWithChildren} from 'react';
import {Text as BaseText, TextProps, TextStyle} from 'react-native';
import {styles} from './Text.styles';
interface TextComponentProps extends TextProps {
  style?: TextStyle | TextStyle[];
  variant?: 'default' | 'medium' | 'semiBold' | 'bold';
}

const TextComponent: React.FC<PropsWithChildren<TextComponentProps>> = (
  {style, children, variant = 'default',...props}) => {
  return (
    <BaseText {...props} style={[styles[variant], style]}>
      {children}
    </BaseText>
  );
};

export const Text = React.memo(TextComponent);
