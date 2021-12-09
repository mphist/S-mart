# S-mart (work in progress)

[S-mart](https://s-mart-three.vercel.app) is a mock E-commerce app, presenting clothing products from existing online retail stores. Users will be able to **test** adding items to their shopping bag and checkout via Stripe with test credit cards provided by Stripe.

\*Users will not actually be able to purchase items on this app as it was only built for demonstration purposes.

## To run the Client project on your computer

Run the following commands.

```console
$ yarn add
$ cd packages/client
$ yarn start
```

or

```console
$ npm install
$ cd packages/client
$ npm start
```

## Stack

### Client

Client project is built with React and the following libraries/technologies were used (list is incomplete):

- TypeScript
- React Router
- Recoil
- Emotion
- Apollo Client

### Server

Server project is built with Express and PostgreSQL was used for the database. The following libraries/technologies & APIs were used (list is incomplete):

- Apollo GraphQL
- Prisma
- Stripe

### Mock Products

All products and images related to the products presented on this app were sourced from [SportChek](https://www.sportchek.ca)
