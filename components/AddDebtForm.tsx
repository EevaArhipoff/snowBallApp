import React, { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from '@/components/CustomButton';
import { FONTS } from '@/constants/constants';


interface formProps {
    name?: string;
    amount?: string;
    monthlyPayment?: string,
}

const AddDebtForm: React.FC<formProps> = ({
    name,
    amount,
    monthlyPayment,
}) => {

    const { control, handleSubmit, formState: { errors } } = useForm<formProps>({})
    const [submittedData, setSubmittedData] = useState<formProps | null>(null)
    const textColor = useThemeColor({}, 'text')
    const buttonBorder = useThemeColor({}, 'buttonBorder')

    const onSubmit = (data: formProps) => {
        // Simulate form submission
        console.log('Submitted Data:', data)
        //   setSubmittedData(data);
    };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={[styles.helperText, { color: textColor }]}>Anna lisättävän velan tiedot. Anna velalle nimi, josta voit itse helposti tunnistaa mikä velka on kyseessä.</Text>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: 'Anna velalle nimi' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, { color: textColor }, { borderColor: buttonBorder }]}
                            placeholder="Velan nimi"
                            placeholderTextColor={'#CDCDCD'}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

                <Text style={[styles.helperText, { color: textColor }]}>Syötä jäljellä olevan velan kokonaismäärä:</Text>
                <Controller
                    control={control}
                    name="amount"
                    rules={{ required: 'Anna loppuvelan määrä.' }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.input, { color: textColor }, { borderColor: buttonBorder }]}
                            placeholder="Jäljellä olevan velan määrä"
                            placeholderTextColor={'#CDCDCD'}
                            value={value}
                            onChangeText={text => {
                                // Only numbers and "," are allowed
                                let formattedText = text.replace(/[^0-9,]/g, '');

                                // Accepting only one comma
                                const parts = formattedText.split(',');
                                if (parts.length > 2) {
                                    return;
                                }

                                // Can't start with comma
                                if (formattedText.startsWith(',')) {
                                    formattedText = '';
                                }

                                onChange(formattedText);
                            }}
                            keyboardType="decimal-pad"
                        />
                    )}
                />
                {errors.amount && <Text style={styles.errorText}>{errors.amount.message}</Text>}

                <Text style={[styles.helperText, { color: textColor }]}>Ilmoita velan kuukausilyhennyksen määrä. Jos lainaa ei tällä hetkellä lyhennetä, aseta määräksi 0:</Text>
                <Controller
                    control={control}
                    name="monthlyPayment"
                    rules={{ required: 'Ilmoita velan kuukausilyhennyksen määrä.' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, { color: textColor }, { borderColor: buttonBorder }]}
                            placeholder="Kuukausilyhennys tällä hetkellä"
                            placeholderTextColor={'#CDCDCD'}
                            onBlur={onBlur}
                            value={value}
                            onChangeText={text => {
                                // Only numbers and "," are allowed
                                let formattedText = text.replace(/[^0-9,]/g, '');

                                // Accepting only one comma
                                const parts = formattedText.split(',');
                                if (parts.length > 2) {
                                    return;
                                }

                                // Can't start with comma
                                if (formattedText.startsWith(',')) {
                                    formattedText = '';
                                }

                                onChange(formattedText);
                            }}
                            keyboardType="decimal-pad"
                        />
                    )}
                />
                {errors.monthlyPayment && <Text style={styles.errorText}>{errors.monthlyPayment.message}</Text>}

                <CustomButton title="Tallenna" onPress={handleSubmit(onSubmit)}></CustomButton>

                {submittedData && (
                    <View style={styles.submittedContainer}>
                        <Text style={styles.submittedTitle}>Annetut tiedot::</Text>
                        <Text>Nimi: {submittedData.name}</Text>
                        <Text>Velan kokonaismäärä: {submittedData.amount}</Text>
                        <Text>Velan kuukausilyhennys: {submittedData.monthlyPayment}</Text>

                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        padding: 8,
    },
    errorText: {
        color: 'red',
        fontSize: 15,
        marginBottom: 15,

    },
    submittedContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    submittedTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    helperText: {
        marginTop: 15,
        fontFamily: FONTS.body,
        lineHeight: 20,
        fontSize: 16,
    }
});

export default AddDebtForm;
