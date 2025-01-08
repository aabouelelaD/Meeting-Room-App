import { useCallback } from 'react';
import {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

const useAnimatedShake = () => {
  const shakeTranslateX = useSharedValue(0);

  const shake = useCallback(() => {
    shakeTranslateX.value = 0;

    // Apply a repeating animation to create a shaking effect
    shakeTranslateX.value = withRepeat(
      withTiming(10, {
        duration: 120,
        easing: Easing.bezier(0.35, 0.7, 0.5, 0.7),
      }),
      6, // Repeat the animation 6 times
      true, // Infinite loop (true indicates indefinite repetition)
    );
  }, [shakeTranslateX]); 
  const rShakeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shakeTranslateX.value }],
    };
  }, []);

  return { shake, rShakeStyle };
};

export { useAnimatedShake };
