## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Changes to the suggested setup
I changed to not using vercel/postgres and using a local database.
It created a docker to support the execution.
It uses adminer to access the Database on the browser.
[Database interface for administration](http://localhost:8080/)

## Setting up the Database for the environment

### Using Docker-Compose
1) Open the folder /.docker/
2) Execute `docker-compose up -d` to start the database

### Using Docker Dev Environment
1) Open the Docker Desktop
2) Go to Dev Environments
3) Hit the Create button at the right top
4) Continue until the setup step which you need to select the local
5) Give the container a name and choose the project folder, the rest will be dealt with by Docker.
6) Now when you start the Docker it will start your dev environment automatically.

### Seed with new data
After starting the database with docker-compose or Docker Dev Environment access the URLs below.
1) Open the seed URL [Seed](http://localhost:3000/seed)
2) Open the [Application](http://localhost:3000/)

## Execut the application
Run the project `pnpm dev`

## Authentication
I have used the version of OpenSSL that came with Git to avoid the need to install it on Windows.
You can find it on the Git installation folder.
`C:\Program Files\Git\usr\bin`
Command to generate the key `openssl rand -base64 32`, this will create a random 64 based string with 32 bytes.