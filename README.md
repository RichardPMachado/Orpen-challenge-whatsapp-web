# Challenge Whatsapp Web

## Inicialização do Projeto

Para inicializar o projeto, utilize o seguinte comando:

```bash
npm run build:project

Configuração do Ambiente
Certifique-se de possuir um arquivo chamado .env.copy e, em seguida, copie-o para um novo arquivo denominado .env:

cp .env.copy .env

Configuração do Banco de Dados
Construa o Docker para o banco de dados PostgreSQL:

npm run docker:up

Subir o Prisma
Acesse o container da API para iniciar o Prisma:

# Substitua <nome_do_container> pelo nome real do seu container
docker exec -it <nome_do_container> bash

Dentro do container, execute os comandos para iniciar o Prisma:

npx prisma generate
npx prisma migrate dev

Isso deve configurar e iniciar o Prisma dentro do seu ambiente de desenvolvimento.

Certifique-se de seguir todas as etapas acima para configurar corretamente o ambiente para o seu projeto Challenge Whatsapp Web.
