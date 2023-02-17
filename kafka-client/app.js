const kafka = require('kafka-node');

const client = new kafka.KafkaClient({kafkaHost: '10.3.0.93:9192'});

var consumer = new kafka.Consumer(client, [ { topic: 'quickstart' } ]);

consumer.on('message', function (message) {
        console.log(message);
});

