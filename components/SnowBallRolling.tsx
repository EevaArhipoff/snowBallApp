import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

export function SnowBallRolling() {
  // Starting position and size
  const startPositionX = useSharedValue(0)
  const startPositionY = useSharedValue(0)
  const ballSize = useSharedValue(20)

  useEffect(() => {
    // Movenment down and across screen
    startPositionX.value = withTiming(350, { duration: 5000 })
    startPositionY.value = withTiming(700, { duration: 5000 })

    // Ball size 
    ballSize.value = withSequence(
      withTiming(50, { duration: 1500 }),
      withTiming(100, { duration: 1500 }),
      withTiming(0, { duration: 1000 })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: startPositionX.value },
      { translateY: startPositionY.value },
    ],
    width: ballSize.value,
    height: ballSize.value,
    borderRadius: ballSize.value / 2,
  }));

  return (
    <Animated.View style={[styles.ball, animatedStyle]} />
  );
}

const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "#ddd",
  },
});
