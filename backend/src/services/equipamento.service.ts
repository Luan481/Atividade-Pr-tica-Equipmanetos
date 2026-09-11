import { pool } from "../database/connection";
import { CriarEquipamentos, Equipamentos } from "../types/equipamentos";

class EquipamentoService {
    async create(dados: CriarEquipamentos): Promise<Equipamentos> {
        try {
            const res = await pool.query<Equipamentos>(`
                INSERT INTO equipamento (nome, tipo, numero_serie, status, data_aquisicao)
                VALUES($1, $2, $3, $4, $5) RETURNING *`, [dados.nome, dados.tipo, dados.numeroSerie, dados.status, dados.dataAquisicao]
            )
            const equipamento = res.rows[0]

            return equipamento
        }
        catch (error) {
            console.error("Erro ao criar equipamento:", error);
            throw new Error("Erro no banco de dados");
        }
    }

    async getAll(): Promise<Equipamentos[]> {
        try {
            const res = await pool.query<Equipamentos>("SELECT * FROM equipamento")
            console.log(res.rows)

            return res.rows
        }
        catch (error) {
            console.error("Erro ao buscar equipamentos", error)
            throw new Error("Erro no banco de dados")
        }
    }
}

export const equipamentosService = new EquipamentoService