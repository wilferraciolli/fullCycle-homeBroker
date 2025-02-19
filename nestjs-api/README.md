## NestJS API - homebroker
API used to manager the rest endpoints to the app. It will use Mongo DB as database and will communicate with Kafka for messaging and also have websockets
### Endpoints

![01-endpoints.png](images/01-endpoints.png)


# Database has the following tables
![02-db.png](images/02-db.png)

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

## nestJS commands
```bash
nest g module <moduleName>
nest g controller <controllerName>

nest g resource
```

## Dependencies
### mongoose
```bash
npm install @nestjs/mongoose mongoose
```