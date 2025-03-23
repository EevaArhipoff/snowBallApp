import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

const useDatabase = () => {
    const [db, setDb] = useState<any>(null)
    const [isDbReady, setIsDbReady] = useState(false);

    useEffect(() => {
        const initializeDatabase = async () => {
            try {
                const database = await SQLite.openDatabaseAsync('debts')
                await database.execAsync(`
                    PRAGMA journal_mode = WAL;
                    CREATE TABLE IF NOT EXISTS unpaidDebts (
                        id INTEGER PRIMARY KEY NOT NULL,
                        name TEXT NOT NULL,
                        amount REAL NOT NULL,
                        monthlyPayment REAL NOT NULL
                    );
                `)
                console.log('Tietokanta alustettu')
                setDb(database)
                setIsDbReady(true)
            } catch (error) {
                console.error('Virhe tietokannan alustuksessa:', error)
            }
        };

        initializeDatabase()
    }, [])

    const fetchAllUnpaidDebts = async () => {
        if (!db) {
            console.error('Tietokantaa ei ole alustettu')
            return [];
        }

        try {
            const result = await db.getAllAsync('SELECT * FROM unpaidDebts;')
            return result
        } catch (error) {
            console.error('Virhe haettaessa velkoja:', error)
            return []
        }
    };


    const addDebt = async (name: string, amount: number, monthlyPayment: number) => {
        if (!db) {
            console.error('Tietokantaa ei ole alustettu')
            return
        }

        try {
            const result = await db.execAsync(`
                    INSERT INTO unpaidDebts (name, amount, monthlyPayment) 
                    VALUES ("${name}", ${amount}, ${monthlyPayment});
                `)
            console.log('Velka lisätty')
        } catch (error) {
            console.error('Virhe lisättäessä velkaa:', error)
        }
    };

    return { db, isDbReady, fetchAllUnpaidDebts, addDebt }
};


export { useDatabase }