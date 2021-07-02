// /**
//  * Initializes the kafka broker using the following arguments passed in from the process environment. The environment values correspond to their respective properties on the Broker constructor.
//  * @param {.ENV string} API_KEY : @key
//  * @param {.ENV string} API_SECRET : @secret
//  * @param {.ENV string} KAFKA_BOOTSTRAP_SERVER : @server
//  */

// const Broker = require('./broker');
// require('dotenv').config();

// const { API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER } = process.env;

// const broker = new Broker(API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER);
// const kafka = broker.create('new-client');

// module.exports = kafka;


const { Kafka } = require('kafkajs')

const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env
const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl

console.log("username", username)
console.log("password", password)
console.log("ssl", ssl)
console.log("sasl", sasl)




// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'npm-slack-notifier',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
  ssl,
  sasl
})

module.exports = kafka
