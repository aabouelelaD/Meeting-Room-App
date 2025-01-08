import { useCallback } from "react";
import {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";


export function useBounceable({ scaleInValue = 0.95, ...config } = {}) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = useCallback(() => {
    scale.value = withSpring(scaleInValue, config);
  }, [scale, scaleInValue, config]);

  const onPressOut = useCallback(() => {
    scale.value = withSpring(1, config);
  }, [config, scale]);

  return {
    onPressIn,
    onPressOut,
    animatedStyle,
  };
}
