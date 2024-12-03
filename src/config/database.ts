import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'jdbc:postgresql://localhost:5432/postgrejdbc:postgresql://dpg-ct7k2uhopnds73bsnf7g-a.oregon-postgres.render.com:5432/banco_dados_projeto_faculdades';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;