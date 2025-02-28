## NestJS API - homebroker
API used to manager the rest endpoints to the app. It will use Mongo DB as database and will communicate with Kafka for messaging and also have websockets
### Endpoints

![01-endpoints.png](images/01-endpoints.png)


# Prereqs
To have install nest JS on the machine `npm install -g @nestjs/cli`
To add the `"esModuleInterop": true` property to tsconfig.json file

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

## Image server
It is possible to run a npx command to create a lightweight server to run a folder Eg `imagesFolder` with the following command
```bash
npx serve -l tcp://127.0.0.1:9001 ./assets
```

## Kafka on its own
within the terminal type in 
```bash
  npm run start:dev -- --entryFile _cmd/kafka.cmd
```

## Command to simulate trade (requires nest commander dependency)
This is a nest JS feature to be able to run a command, used to simulate trading between users just to test the data.
this is an interactive tool which will create assets, create wallets and so on... Please wipe the database before running it.
```bash
  npm run command simulate-assets-price   
```
Once ran, it should ask you if you want to simulate users, it should look like this
![commander to simulate trading](images/04-commander.png)

## Websockets
Each class annotated with @WebSocketGateway() is a websocket server, it can be tested simply by using Postman socket.io to test
Eg Websocket connection to `ws://localhost:3000` with a payload, then add the message name to the `Ack` field in postman to map which 
websocket you want to connect to
![03-websockets.png](images/03-websockets.png)

## nestJS commands
```bash
nest g module <moduleName>
nest g controller <controllerName>
nest g gateway <gatewayName>

nest g resource
```

## MongoDB / Mongoose integration
Within the app main Module, import the MongooseModule and call the forRoot function passing in the connection string to the database.
Eg 
```typescript
...
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://root:root@localhost:27017/nest?authSource=admin&directConnection=true'),
        AssetsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

```
Then within the Assets module or any other module that need access to the database, it is then required to import the MongooseModule and call the forFeature method.
Then for each schema that you want to use, pass in the entity name and its type defined within the TS class 
Eg `export const AssetSchema = SchemaFactory.createForClass(Asset);`
```typescript
import {MongooseModule} from "@nestjs/mongoose";
import {Asset, AssetSchema} from "./entities/asset.entity";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Asset.name, schema: AssetSchema},
        ])
    ],
    controllers: [AssetsController],
    providers: [AssetsService],
})
export class AssetsModule {
}

```

## Dependencies
### mongoose
```bash
    npm install @nestjs/mongoose mongoose
```

### web sockets io
Install sockets io to use websockets
```bash
  npm install @nestjs/websockets @nestjs/platform-socket.io 
```

### Kafka
Kafka new library to use with nest js
```bash
    npm install @confluentinc/kafka-javascript
```

### microservices
```bash
  npm install @nestjs/microservices  
```

### nest commander helper tool
This is a tool that allows to run code within the CLI, in case of this project, it is used to simulate a days worth of trading.
See the command above as it is interactive
```bash
  npm install nest-commander
```

