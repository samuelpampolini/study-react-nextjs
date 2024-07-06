## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Changes to the suggested setup
I changed to not use vercel/postgres and use a local database.
It was created a docker to support the execution.
It uses adminer to access the Database on the browser.
[Database interface for administration](http://localhost:8080/)

## Fist steps to run the application
1) Execute `docker-compose up -d` to start the database
2) Run the project `pnpm dev`
3) Open the seed URL [Seed](http://localhost:3000/seed)
4) Open the [Application](http://localhost:3000/)