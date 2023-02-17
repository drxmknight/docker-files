# Kafka-Server

Apache kafka server

## Build and run

```bash
docker compose up -d
```

## Commands

The following command create, write and read messages to a broker:

Create Topic:
```bash
docker exec broker kafka-topics --bootstrap-server broker:9092 --create --topic quickstart
```

Write topic:
```bash
docker exec -it broker kafka-console-producer --bootstrap-server broker:9092 --topic quickstart
```

Read Topic:
```bash
docker exec --interactive --tty broker kafka-console-consumer --bootstrap-server broker:9092 --topic quickstart --from-beginning
```

Read from topic using consumer group:
```bash
docker exec --interactive --tty broker kafka-console-consumer --bootstrap-server broker:9092 --topic quickstart --from-beginning --group test-group
```

List all consumer groups:
```bash
docker exec broker kafka-consumer-groups --bootstrap-server broker:9092 --list
```
