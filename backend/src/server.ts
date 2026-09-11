import express, {Request, type Response} from "express";
import { equipamentoRouter } from "./routes/equipamento.routes";

const app = express()
const port = 3000

app.use(express.json())
app.use("/equipamentos", equipamentoRouter)


app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})