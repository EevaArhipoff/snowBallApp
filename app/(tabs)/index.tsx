import { Image, StyleSheet, Platform } from 'react-native';

import { SnowBallRolling } from '@/components/SnowBallRolling';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {

  const testi = (message: string) => {
    setTimeout(() => {
      console.log('testiFunktio kuittaa.')
      window.alert('Testifunktiosta terve')
    }, 100)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/gude.png')}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tervetuloa vyöryttämään velkoja!</ThemedText>
        <SnowBallRolling />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Velkojen yhteismäärä:</ThemedText>
        <ThemedText type="defaultSemiBold">12 345€</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seuraavan maksu:</ThemedText>
        <ThemedText>Maksu: 103€</ThemedText>
        <ThemedText>Kohde: Pikavippi</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Tällä maksusuunnitelmalla velat saadaan kuitattua vyöryttämällä 1.3.2026</ThemedText>
        <ThemedText>Voit kokeilla kuinka maksuaika muuttuu jos lisäät kuukausittaisen maksun määrää. Tulisko tähän nappi jolla voi kokeilla.</ThemedText>
        <CustomButton title="Lisää 5e" onPress={() => testi("Nappia painettu!")}></CustomButton>
        <ThemedText>Velkasi kuittaantuisi 5€ lisämaksulla 31.12.2025</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
