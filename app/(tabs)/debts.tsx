import { StyleSheet } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import HeaderView from '@/components/HeaderView';
import AddDebtForm from '@/components/AddDebtForm';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.headerBackGround, dark: Colors.dark.headerBackGround }}
      headerImage={
        <HeaderView title="SnowBall" />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Velat</ThemedText>
      </ThemedView>
      <ThemedText>Tältä sivulta löydät listaamasi velat. Voit myös lisätä, muokata tai poistaa velkoja.</ThemedText>
      <Collapsible title="Velat">
        <ThemedText>
          <ThemedText type="defaultSemiBold">Velka nro 1</ThemedText>
          <ThemedText type="defaultSemiBold">Velka nro 2</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Lisää velka">
        <AddDebtForm />
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
