import { readFileSync, writeFile } from 'fs';

// 4. Schreibe zurück in die DB, und zwar die DB
export const saveToDb = (database, databaseFile = 'db.json') => {
  writeFile(databaseFile, JSON.stringify(database, null, 2), (error) => {
    if (error) {
      console.error(error.message);
      response.json({ error: error.message });
    }
  });
};

// 1. Lies die Datenbank ein vgl. controller.js const database = loadFromDB
export const loadFromDb = (databaseFile = 'db.json') => {
  try {
    const database = readFileSync(databaseFile, { encoding: 'utf8' });
    // 2. Hole die bestehenden Products
    return JSON.parse(database);
  } catch (error) {
    console.error(error.message);
    return;
  }
};