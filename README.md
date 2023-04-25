# Similarity API

This project is a web application that uses the OpenAI API to find similar sentences to the one you provide.

##### The project is built using the following technologies:

NextJS, Typescript, TailwindCSS, Prisma, Redis, OpenAI API, Google OAuth, Vercel

To see the project in action, visit the following link:

[![vercel](https://img.shields.io/badge/vercel-230?style=for-the-badge&logo=vercel&logoColor=white)](https://similarity-api-gamma.vercel.app/)

<!-- GETTING STARTED -->

## Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/ahmetenesdur/similarity-api
    ```
2.  Install NPM packages

    ```sh
    npm install
    ```

    or

    ```sh
    yarn install
    ```

3.  Create an `.env.local` file looking like this

    ```sh
    NEXTAUTH_SECRET=
    NEXTAUTH_URL=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    DATABASE_URL=
    OPENAI_API_KEY=
    REDIS_URL=
    REDIS_SECRET=
    ```

4.  Create a [Google OAuth Client](https://console.cloud.google.com/apis/credentials/oauthclient) and add the client id and secret to the `.env.local` file

5.  Create a [OpenAI API Key](https://beta.openai.com/docs/developer-quickstart/your-api-keys) and add the key to the `.env.local` file

6.  Create a [Redis Cloud Account](https://app.redislabs.com/#/login) and add the url and secret to the `.env.local` file

7.  Prisma generate, db push and init

        npx prisma generate
        npx prisma init
        npx prisma db push

        or

        yarn prisma generate
        yarn prisma init
        yarn prisma db push

8.  Run the development server

    ```sh
    npm run dev
    ```

    or

    ```sh
    yarn dev
    ```

9.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

    <!-- USAGE EXAMPLES -->

## Usage

-   Login with your Google Account
-   Get your API Key
-   Use the API Key to make requests to the API
- Similarly API is a REST API that takes a sentence and returns similar sentences to it.


<!-- SCREENSHOTS -->

## Screenshots

![dApp Screenshot1](https://i.imgur.com/MqhlcK9.png)
![dApp Screenshot2](https://i.imgur.com/UPJHif0.png)
![dApp Screenshot3](https://i.imgur.com/pEU1yTc.png)
![dApp Screenshot4](https://i.imgur.com/aNzb8Jg.png)
![dApp Screenshot5](https://i.imgur.com/0bCB9Ga.png)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[![linkedin](https://img.shields.io/badge/linkedin-230?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmetenesdur/) [![github](https://img.shields.io/badge/github-230?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ahmetenesdur)
