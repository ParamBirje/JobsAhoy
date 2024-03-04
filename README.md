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
<!--     <a href="https://github.com">Website</a> -->
<!--     · -->
    <a href="https://github.com/ParamBirje/JobsAhoy/issues">Issues</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About the Project

<img width="100%" alt="sign-up-screen" src="https://github.com/ParamBirje/JobsAhoy/assets/87022870/b4359089-9201-4d76-ab95-bae3d83fe2b9">

# Finding visa sponsored jobs made easier.

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

### Pre-requisites

[Node v18.19 or above](https://nodejs.org/en/download) (comes with package manager `npm`)

The project uses a MySQL database that can be deployed using 2 ways. You have to **choose one** of the following ways.

- Docker
- Manual

### App Setup

Let's start with the steps for setting up the project that are common for both of the deployment methods.

- Clone the repo to your local system
```
git clone https://github.com/ParamBirje/JobsAhoy.git
```
- Change directory into the project directory `cd JobsAhoy`
- Inside the project directory, install the required JS dependencies by running the following command
```
npm install
```
- Locate the `.env.example` in the project's root directory and make a copy of it as a `.env` file. For now don't edit anything, we will get back to this later.

Great job! Before we get the website up and running, we need a database for functioning. Only to setup the MySQL database, we now split into either paths (using Docker **or** setting it up manually).

### Docker

Ensure you have [Docker Engine and Docker Compose v2](https://docs.docker.com/compose/install/) installed and the engine is running.

- Make sure no service, especially local MySQL, is running on port `3306` ([stop the service if running](https://phoenixnap.com/kb/start-mysql-server#ftoc-heading-5:~:text=Start%20Server%20button%2C-,Stop%20MySQL%20Server,-The%20ability%20to))
- Open the `.env` file we created earlier, and edit:
  - `DATABASE_PASSWORD`, Set any password that you want, Docker will use this value when initialising the database.
- Inside the project directory, run this command to start the container.

```
docker compose --env-file .env up --build
```

- Wait for this message at the end >> `[Server] /usr/sbin/mysqld: ready for connections. Version: '8.3.0'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL` which confirms the database is ready to receive connections.

### Manual Database Setup (skip if done by Docker)

Ensure you have [MySQL 8.0.3^](https://dev.mysql.com/downloads/) installed.

You can optionally use [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) for an easier UI based configuration and setup procedure or use the old-school CLI way.

- [Create a new database schema](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-create-a-database-schema-with-the-MySQL-Workbench) named `jobsahoy_sample`
- Open the `.env` file we created earlier, and edit:
  - `DATABASE_USER`, edit this and set it to your MySQL user name that you used during initial database setup (default user is `root`)
  - `DATABASE_PASSWORD`, set MySQL user password that you had used to initially setup the user.
- Having the `jobsahoy_sample` database schema selected, [run all the queries](https://world.siteground.com/tutorials/php-mysql/mysql-workbench/#:~:text=To%20do%20that%2C%20first%20select,field%20to%20run%20the%20query.) that are in `db-setup.sql` to initialise the database with dummy data and table schema.

### Continuing App Setup

Open a new terminal session and change working directory to the project's root directory i.e `cd JobsAhoy`

- After we have the project dependencies installed, let's create a build of our app by executing:

```
npm run build
```

- We now run the build version using the following command.

```
npm run start
```

- You can now access the app in your browser on [http://localhost:3000](http://localhost:3000/)

To test the website with authentication, continue reading below.

## Testing

The project, in production, will be using only social sign-ins (SSO) and hence does not have the traditional sign-in / sign-up page implemented. The social authentication providers require an API key for them to function. Although it is practically not possible for everyone to possess these keys, for testing purposes, there is an email sign-in feature developed for testing user behaviors. Let's look at how we could test the authentication.

### Test Users

If you followed all the instructions of the local setup guide, you can test on the login page using these credentials (passwordless).
- `john@example.com`
- `jane@example.com`
- `michael@example.com`

_The `db-setup.sql` script helps us in setting up these users._

### Google OAuth

If you possess the Google OAuth provider API keys from the Google Cloud Platform ([get them here](https://support.google.com/cloud/answer/6158849?hl=en)):
- Edit the `.env` file and
  - Set `GOOGLE_CLIENT` and the `GOOGLE_SECRET` to the corresponding values provided by Google.

And you're all set to test the Google Authentication. Just rebuild the Next.js application.

## Contributing

Unfortunately at the moment, the project is **not** open for contributions.

## Additional

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
