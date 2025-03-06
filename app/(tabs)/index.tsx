import { Image, StyleSheet, View, Text } from 'react-native';
import { SnowBallRolling } from '@/components/SnowBallRolling';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { FONTS } from '@/constants/constants';

export default function HomeScreen() {

  const testi = (message: string) => {
    setTimeout(() => {
      console.log('testiFunktio kuittaa.')
      window.alert('Testifunktiosta terve')
    }, 100)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.headerBackGround, dark: Colors.dark.headerBackGround }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image source={require('@/assets/images/snow.jpg')} style={styles.logo} />
          <Text style={styles.appName}>SnowBall</Text>
        </View>
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
  headerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  appName: {
    position: 'absolute',
    fontSize: 40,
    fontFamily: FONTS.title,
    color: '1181C',
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
