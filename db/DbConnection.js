const { Client } = require('pg');

const client = new Client({
connectionString: 'postgres://ewvtubinelzuyc:c74862f54d2fcbddb4ae5088e0df5cf88e26bc2d61c1e9b1ef50323aeb843610@ec2-52-205-61-230.compute-1.amazonaws.com:5432/ddgpscudnqidhv',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();


module.exports = client;