import React from 'react';
import {
  ActivityIndicator,
  PressableProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useBounceable} from '../../animations/useBounceable';
import {Text} from '../Text';
import {styles} from './Button.styles';
import {Colors} from '../../theme/colors';
import {Bounceable} from '../Bounceable';
export interface ButtonComponentProps extends PressableProps {
  animationProps?: Parameters<typeof useBounceable>[0];
  title: string;
  loading?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  isBounceable?: boolean;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  animationProps,
  onPress,
  title,
  loading,
  disabled,
  style,
  titleStyle,
  isBounceable,
}) => {
  return (
    <Bounceable
      isBounceable={isBounceable}
      style={[styles.buttonStyle, style]}
      disabled={disabled || loading}
      animationProps={animationProps}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          color={Colors.WHITE}
        />
      ) : (
        <>
            <Text
              variant="semiBold"
              style={[
                styles.titleStyle,
                titleStyle || {},
              ]}>
              {title}
            </Text>
        </>
      )}
    </Bounceable>
  );
};

export const Button = React.memo(ButtonComponent);
