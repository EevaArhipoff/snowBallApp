import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import HeaderView from '@/components/HeaderView';
import AddDebtForm from '@/components/AddDebtForm';
import ListOfDebts from '@/components/ListOfDebts';
import { useDatabase } from '@/SQL/dataBaseFunctions';

export default function TabTwoScreen() {

  const { db, fetchAllUnpaidDebts, isDbReady } = useDatabase()
  const [debts, setDebts] = useState<any[]>([])

  useEffect(() => {
    if (!isDbReady) return

    const fetchData = async () => {
      const data = await fetchAllUnpaidDebts()
      setDebts(data)
    };

    fetchData();
  }, [isDbReady])

  // Fetching message if database is loading
  if (!isDbReady) {
    return <ThemedText>Ladataan tietokantaa...</ThemedText>
  }

  const handleNewDebt = async () => {
    const debts = await fetchAllUnpaidDebts();
    setDebts(debts);

  };

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
        <ThemedText>{debts.length > 0 ? `Velkoja: ${debts.length} kpl` : 'Ei velkoja'}</ThemedText>
        <ListOfDebts debts={debts} />
      </Collapsible>
      <Collapsible title="Lisää velka">
        <AddDebtForm onDebtAdd={handleNewDebt} />
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