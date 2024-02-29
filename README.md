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

- MySQL
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
- After the dependencies are installed, you can access the app in your browser on `localhost:3000` by running
  - Using npm `npm run dev`
  - Using yarn `yarn dev`
  - Using pnpm `pnpm run dev`
  - Using bun `bun run dev` _(faster)_

Great job! The website is up and running, but it would need a database for functioning. Only to setup the MySQL database, we now split into either paths (using Docker or setting it up manually).

#### Docker

#### Manually

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Unfortunately at the moment, the project is **not** open for contributions.

### Additional

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
