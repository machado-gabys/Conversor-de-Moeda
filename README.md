# Funcionalidades
Conversão rápida entre diferentes moedas.
Interface responsiva e amigável ao usuário.
Taxas de câmbio fixas definidas em um arquivo JSON.
Componentização com React e uso de hooks para gerenciar o estado da aplicação.
Testes unitários para garantir o funcionamento dos principais componentes.

# Pré-requisitos
Para executar este projeto, você precisará ter Node.js e npm instalados em sua máquina.

# Instalação e Execução

git clone <URL do repositório>
cd conversor-moeda
npm install
npm start

## Acesse o aplicativo no navegador:
O projeto estará rodando em http://localhost:3000.

## Estrutura do Projeto
/conversor-moeda 
├── /data
│   └── taxasCambio.json        # Taxas de câmbio fictícias
│
├── /src
│   ├── /components
│   │   ├── ConversorMoeda.tsx  # Componente principal de conversão
│   │   └── EntradaMoeda.tsx    # Componente para entrada de valores e seleção de moeda
│   │
│   └── index.tsx               # Ponto de entrada da aplicação
│
├── package.json                # Dependências e scripts do projeto
└── README.md                   # Documentação do projeto