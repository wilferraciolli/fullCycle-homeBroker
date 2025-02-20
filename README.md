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
