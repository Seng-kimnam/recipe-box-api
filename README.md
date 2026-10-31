## Description

This application is about recipe box api which is the rest api build for recipe of the food, and also have login and register feature

## Data field of recipe box
[1] id 
[2] title
[3] description
[4] isFavorite

## API endpoint 

# auth
POST [register new user](http://localhost:3000/auth/register)
POST [Login for token](http://localhost:3000/auth/login)


# recipe
GET [listing all item](http://localhost:3000/recipes)
GET [Get item by existing id](http://localhost:3000/recipes/{id})
POST [create new item](http://localhost:3000/recipes)
PATCH [update item by id](http://localhost:3000/recipes/{id})
DELETE [remove item by id](http://localhost:3000/recipes/{id})

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
