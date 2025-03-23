import { Text, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type Debt = {
    id: string
    name: string
    amount: number
    monthlyPayment: number
}

interface ListOfDebtProps {
    // Debt list comes as a prop from debts.tsx
    debts: Debt[]
}

const ListOfDebts: React.FC<ListOfDebtProps> = ({ debts }) => {

    return (
        <View>
            {debts.length > 0 ? (
                debts.map((item) => (
                    <View key={item.id} style={styles.oneDebt}>
                        <Text style={styles.name}>{item.name}</Text>
                        <ThemedText>Velan määrä: {item.amount}€</ThemedText>
                        <ThemedText>Kuukausierä: {item.monthlyPayment}€</ThemedText>
                    </View>

                ))
            ) : (
                <ThemedText>Voit lisätä velkoja "Lisää velka" valikosta.</ThemedText>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    oneDebt: {
        backgroundColor: '#B8860B',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 32,
    },
});

export default ListOfDebts;
