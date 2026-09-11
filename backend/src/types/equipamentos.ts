export interface Equipamentos{
    id: string
    nome: string
    tipo: string
    status?: string
    numeroSerie: string
    dataAquisicao: string
}
export interface CriarEquipamentos{
    nome: string
    tipo: string
    status?: string
    numeroSerie: string
    dataAquisicao: string
}