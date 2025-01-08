import React, {PropsWithChildren} from 'react';
import {Pressable, PressableProps, TouchableOpacityProps} from 'react-native';
import Animated, {AnimatedProps} from 'react-native-reanimated';
import {useBounceable} from '../../animations/useBounceable';

export type BounceableProps = Omit<
  AnimatedProps<PressableProps | TouchableOpacityProps>,
  'children'
> & {
  isBounceable?: boolean;
  animationProps?: Parameters<typeof useBounceable>[0];
};

const BounceableComponent: React.FC<PropsWithChildren<BounceableProps>> = ({
  style,
  onPress,
  children,
  animationProps,
  onPressOut,
  onPressIn,
  isBounceable = true,
  ...rest
}) => {
  const {
    animatedStyle,
    onPressIn: animatedOnPressIn,
    onPressOut: animatedOnPressOut,
  } = useBounceable(animationProps);

  const AnimatedComponent = Animated.createAnimatedComponent(Pressable);

  const handlePressIn: typeof onPressIn = () => {
    if (isBounceable) {
      animatedOnPressIn();
    }
  };

  const handlePressOut: typeof onPressOut = () => {
    if (isBounceable) {
      animatedOnPressOut();
    }
  };

  return (
    <AnimatedComponent
      {...rest}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={[style as any, animatedStyle]}>
      {children}
    </AnimatedComponent>
  );
};

export const Bounceable = React.memo(BounceableComponent);
