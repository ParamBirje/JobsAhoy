<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com">
   <img src="https://github.com/ParamBirje/JobsAhoy/assets/87022870/6171210e-21bb-45e9-9b72-c286ba79af01.jpg" alt="Logo">
  </a>

  <h3 align="center">JobsAhoy</h3>

  <p align="center">
    Finding a job abroad made simple.
    <br />
    <br />
    <a href="https://github.com">Website</a>
    ·
    <a href="https://github.com/ParamBirje/JobsAhoy/issues">Issues</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About the Project

<img width="100%" alt="booking-screen" src="https://github.com/calcom/cal.com/assets/8019099/407e727e-ff19-4ca4-bcae-049dca05cf02">

# Relocating for a job across the globe, made simple.

Want to relocate to your favourite countries? Feeling exhausted searching for visa sponsored jobs? Have tried every job board out there?

Well, this is where JobsAhoy comes in. Curating **visa-sponsored** jobs that match your profile according to the experience you bring and the skills you possess. No more wasting time on searching the job you want on each and every job board, managing multiple alerts and following an enormous list of company's career pages.

We personalize your job-seeking journey abroad by centrally **curating the jobs you want from the companies that want you**, without the clutter.

## Tech Stack

Built using,

- Next.js
- React.js
- Typescript
- Tailwind CSS
- Kysely
- MySQL

<!-- Setting up the project -->

## Running locally

#### Pre-requisites

- Node v18.19 or above
- Package manager (npm, yarn, pnpm or bun)

The project can be setup deployed using 2 ways one being through Docker (automated) and the other being manually. If you choose to go with the automated way, you will need:

- Docker with Docker Compose v2

Else with the manual method:

- MySQL v8.3 or above
- MySQL workbench (optional, for GUI interface)

Let's start with the steps that are common for both of the deployment methods.

- Clone the repo to your local client
- Change directory into the project directory `cd JobsAhoy`
- Inside the project directory, install the required JS dependencies using your favourite package manager
  - Using npm `npm install`
  - Using yarn `yarn`
  - Using pnpm `pnpm install`
  - Using bun `bun install` _(faster)_
- Create a `.env` file and copy all the data from `.env.example` into it. For now don't edit anything, we will get back to this later.

Great job! Before we get the website up and running, we need a database for functioning. Only to setup the MySQL database, we now split into either paths (using Docker **or** setting it up manually).

#### Docker

Ensure you have Docker and Docker Compose v2 installed.

- Make sure no service, especially local MySQL, is running on port `3306` ([stop them if running](https://phoenixnap.com/kb/start-mysql-server))
- Open the `.env` file we created earlier, and edit:
  - `DATABASE_PASSWORD`, Set any password that you want, Docker will use this value when initialising the database.
- Inside the project folder, run this command to start the container

```
docker compose --env-file .env up --build
```

- Make sure you get his message at the end >> `jobsahoy_mysql_dummy  | 2024-03-01T12:59:16.781825Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.3.0'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL` which confirms the database is ready to receive connections.

#### Manually

Ensure you have MySQL 8.3^ installed. You can optionally use MySQL Workbench for an easier UI based configuration and setup procedure or use the old-school CLI way.

- [Create a new database schema](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-create-a-database-schema-with-the-MySQL-Workbench) named `jobsahoy_sample`
- Open the `.env` file we created earlier, and edit:
  - `DATABASE_USER`, edit this and set it to your MySQL user name if it is other than `root`
  - `DATABASE_PASSWORD`, set MySQL user password that you had used to initially setup
- Having the `jobsahoy_sample` database schema selected, [run the all queries](https://world.siteground.com/tutorials/php-mysql/mysql-workbench/#:~:text=To%20do%20that%2C%20first%20select,field%20to%20run%20the%20query.) that are in `db-setup.sql` to initialise the database with dummy data and table schema.

#### Setting up the website

- After the project dependencies are installed, we create a build of our app. (_with npm as example_)

```
npm run build
```

- We now run the build version using the following command.

```
npm run start
```

You can now access the app in your browser on [http://localhost:3000](http://localhost:3000/) !

## Contributing

Unfortunately at the moment, the project is **not** open for contributions.

### Additional

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
