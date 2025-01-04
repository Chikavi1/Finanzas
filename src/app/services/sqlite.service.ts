import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private db: SQLiteDBConnection | null = null;

  constructor() {}

  async initializeDatabase() {
    if (Capacitor.isNativePlatform()) {
      try {
        // Crear conexión a la base de datos
        this.db = await CapacitorSQLite.createConnection({
          database: 'movements.db',
          version: 1,
        });

        await this.db.open();

        // Crear tabla si no existe
        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS movements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL
          );
        `);

        console.log('Database initialized successfully');
      } catch (error) {
        console.error('Error initializing the database:', error);
      }
    } else {
      console.warn('SQLite is only supported on native platforms.');
    }
  }

  async addUser(name: string, email: string) {
    if (!this.db) return;

    try {
      const query = `INSERT INTO movements (name, email) VALUES (?, ?)`;
      await this.db.run(query, [name, email]);
      console.log(`User ${name} added successfully.`);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  async getMovements() {
    if (!this.db) return [];

    try {
      const query = `SELECT * FROM movements`;
      const result = await this.db.query(query);
      return result.values || [];
    } catch (error) {
      console.error('Error retrieving movements:', error);
      return [];
    }
  }

  async updateUser(id: number, name: string, email: string) {
    if (!this.db) return;

    try {
      const query = `UPDATE movements SET name = ?, email = ? WHERE id = ?`;
      await this.db.run(query, [name, email, id]);
      console.log(`User ${id} updated successfully.`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  async deleteUser(id: number) {
    if (!this.db) return;

    try {
      const query = `DELETE FROM movements WHERE id = ?`;
      await this.db.run(query, [id]);
      console.log(`User ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  async closeDatabase() {
    if (this.db) {
      try {
        await this.db.close();
        this.db = null;
        console.log('Database closed successfully.');
      } catch (error) {
        console.error('Error closing database:', error);
      }
    }
  }
}
