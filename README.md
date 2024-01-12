# Challenge Whatsapp Web

## Inicialização do Projeto


Para inicializar o projeto, após fazer o clone dele, faça configuração do Ambiente

Certifique-se de possuir um arquivo chamado .env.copy e, em seguida, renomeie-o para .env
tanto na pasta raiz, quanto na pasta api/


Configuração do Banco de Dados
Construa o Docker para o banco de dados PostgreSQL:



```bash 
#apos de ter certeza que renomeou os arquivos siga o comando abaixo na pasta raiz
npm run docker:up
```

Configurar o Prisma
Acesse a pasta API para iniciar o Prisma:

```bash
cd api/
```

```
  npx prisma generate
  npx prisma migrate dev
  npx prisma db seed
```

ou para ser mais rápido

```bash 
npm run prisma:up
```

para subir o servidor:
```bash
#execute esse comando dentro da pasta api/
npm run dev
```

abra outro terminal na pasta raiz
```bash
cd web/
```

```bash
#certifique-se de executar esse comando dentro da pasta web/
npm run dev
```

Isso deve configurar e iniciar o Prisma dentro do seu ambiente de desenvolvimento.

Acesse em seu Navegador

http://localHost:5173/

Login:

usuário: Rafael-orpen
senha: #RichardOrpen2024


Certifique-se de seguir todas as etapas acima para configurar corretamente o ambiente para o seu projeto Challenge Whatsapp Web.
