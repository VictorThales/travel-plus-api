# Travel Plus

Trabalho de conclusão de curso de pós-graduação em desenvolvimento fullstack na PUCRS

## Pré requisitos

### Node 
### Docker

## Instalação

Clone o repositório para o seu ambiente e execute o comando na raiz do projeto

```bash
$ yarn install
```
Configure o arquivo .env na raiz do projeto com:

```bash
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/postgres?schema=public"
```

Execute os comandos

```bash
$ docker-compose up
$ npx prisma migrate dev
```

Neste momento o banco de dados deve ser criado e disponibilizado


## Rodando o servidor

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

```

## Rodando o teste

```bash
$ yarn run test 
```

