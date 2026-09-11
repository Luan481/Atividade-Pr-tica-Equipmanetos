import "dotenv/config"
import pg from 'pg'

const { Pool } = pg

export const pool = new Pool()

pool.on("error", (error: any) => {
    console.error(
        "Conexão idle encotrada ", error
    )
    process.exit(1)
})