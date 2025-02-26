import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';


export function SnowBallRolling() {
  const startPosition = useSharedValue(-50)
  const ballSize = useSharedValue(20)

  useEffect(() => {
    startPosition.value = withRepeat(
      withTiming(200, { duration: 3000 }),
      6, // Run the animation times (-1 infinite)
      false
    );

    ballSize.value = withRepeat(
      withSequence(
        withTiming(30, { duration: 1000 }),
        withTiming(40, { duration: 1000 }),
        withTiming(50, { duration: 1000 }),
      ),
      6,
      false
    );
  }, []);


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: startPosition.value }],
    width: ballSize.value,
    height: ballSize.value,
    borderRadius: ballSize.value / 2,
  }));

  return (
    <Animated.View style={[styles.ball, animatedStyle]}>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "#ddd",
  },
});
