import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const initDB = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            const sql = `CREATE TABLE IF NOT EXISTS `
                + `places(id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL,`
                + `address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)`;
            tx.executeSql(sql,
                [],
                () => {
                    resolve('table created successful');
                }, (_, error) => {
                console.log('Uppps error in SQL ', error);
                    reject(error);
                    return false;
                }
            );
        });
    });
}

export const insertPlace = (title: string, imageUri: string, address: string, lat: number, lng: number) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            const sql = `INSERT INTO places (title, imageUri, address, lat, lng) `
                + `VALUES (?, ?, ?, ?, ?)`;
            const values = [title, imageUri, address, lat, lng];

            tx.executeSql(sql,
                [...values],
                (sqlTransaction, sqlResult) => {
                    resolve(sqlResult);
                }, (sqlTransaction, error) => {
                    console.log('Uppps error in SQL ', error);
                    reject(error);
                    return false;
                }
            );
        });
    });
};


export const getPlaces = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            const sql = 'SELECT * FROM places';

            tx.executeSql(sql,
                [],
                (sqlTransaction, sqlResult) => {
                    resolve(sqlResult);
                }, (sqlTransaction, error) => {
                    console.log('Uppps error in SQL ', error);
                    reject(error);
                    return false;
                }
            );
        });
    });
};