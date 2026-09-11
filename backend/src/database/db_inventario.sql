CREATE TABLE IF NOT EXISTS  public.equipamento(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    numero_serie VARCHAR(255) NOT NULL,
    status VARCHAR(255) DEFAULT 'Disponivel',
    data_aquisicao DATE NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)