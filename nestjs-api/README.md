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