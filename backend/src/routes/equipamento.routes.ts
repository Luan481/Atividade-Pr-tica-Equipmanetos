import { Router, Request, type Response } from "express";
import { equipamentosService } from "../services/equipamento.service";
import { CriarEquipamentos } from "../types/equipamentos";

export const equipamentoRouter = Router()

equipamentoRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await equipamentosService.getAll()

        return response.json(res)
    }
    catch (error) {
        console.error(error)

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})

equipamentoRouter.post("/", async (_request: Request<{}, {}, CriarEquipamentos>, response: Response) => {
    try {
        const dados = _request.body

        const user = await equipamentosService.create(dados)

        return response.status(201).json(user);

    }
    catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Erro ao criar equipamentos",
        });
    }
})