 # Go Lang project to simulate a broker
 Used to simulate brokers, it uses kafka to process and handle messages
 ![go and kafka.png](images/01-go-kafka.png)
 
 
 ### Create project
 type in 
 ```bash
 go mod init github.com/wilferraciolli/fullCycle-homeBroker/go-simulator               
 ```

 ### Install dependencies
 ```bash
 go mod tidy
 ```

### Run the project
on the terminal type in
```bash
  go run cmd/trade/main.go
```

### Run the project on a single docker compose file
The project was set up to run within a single dockercomponse file on the root project, all that it does is to import the inner docker composes and run all together, although it is still necessary to docker compose onto the containers and execute the servers.

GoLang 
```bash 
  docker compose exec -it golang sh
```
Then to run the app type in
```
  go run cmd/trade/main.go
```

NestJS 
```bash 
  docker compose exec nest bash
```
then within nestJs  there are a few commands to run
```
  npm run start:dev
  npm run assets-image
  npm command...... see readme
```

#NextJS
```bash 
  docker compose exec next bash
```

## Kafka admin
It uses the control-center docker image to manage kafka topics, run the docker compose then on the browser go to 
`localhost:9021`
## Kafka topics
Using kafka's control center admin, create the 2 topics this application uses `orders` and `processed_orders`

## Dependencies
### Google - UUID
### Confluentinc - Apache kafka 

// TODO stoped lessioon 5 56:00
// TODO stoped lessioon 5 56:00
// TODO stoped lessioon 5 56:00


