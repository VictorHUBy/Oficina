# Oficina de Bicicletas

Aplicação de estudo feita com React para organizar ordens de serviço de uma oficina de bicicletas.

## O que faz

- Cadastra uma ordem com nome do cliente, serviço e valor.
- Valida os campos antes de cadastrar.
- Permite marcar uma ordem como concluída ou reabri-la.
- Permite remover ordens.
- Exibe o total de ordens, quantas estão em aberto e a soma dos valores pendentes.

## Tecnologias

- React
- JavaScript
- Vite

## Como executar

É necessário ter Node.js e npm instalados.

1. Clone o repositório:

   ```bash
   git clone https://github.com/VictorHUBy/Oficina.git
   cd Oficina
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo Vite no terminal.

Para gerar a versão de produção:

```bash
npm run build
```

## Estado dos dados

Por enquanto, as ordens ficam em memória no estado do React. Elas não são salvas em banco de dados e são perdidas ao recarregar a página.

## Objetivo de aprendizado

O projeto serve para praticar componentes, estado, formulários, validação de entradas, listas e atualização de dados em React.
