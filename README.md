# fullCycle-homeBroker
List of microservices to mimic a home broker
Home broker simulator using nestJS, GoLang, nextJs and docker

GIT code can be found [here](https://github.com/devfullcycle/imersao21)

![01-overview.png](images/01-overview.png)

### Overview
NestJS - API
NextJS / React/ Tailwind - UI
GoLang - Simulate B3 stock market
MongoDB / Mongoose ORM- DB
Websockets and Apache Kafka - for communication
Docker - to deploy the app
![02-architetura.png](images/02-architetura.png)

### Use cases ERM
![use cases.png](images/03-useCases.png)
![04-erm.png](images/04-erm.png)

# DB MongoDB
To connect to the database, follow this connection string
`mongodb://admin:admin@localhost:27017/routes?authSource=admin&directConnection=true`

# Communication
The servers will communicate via websockets to show data in real time as well as MongoDB stream
![websockets.png](images/05-websockets.png)
![mongoStream.png](images/06-mongoDBStream.png)

## Messaging
Apache kafka was used to send messages between servers
![kafka.png](images/07-kafka.png)
