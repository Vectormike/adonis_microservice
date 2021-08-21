const amqp = require('amqplib');
const uuid = require('uuid');

const q = 'example';

const RABBITMQ = 'amqp://localhost:15672';
try {
    const open = amqp.connect(RABBITMQ);
    open
  .then(function(conn) {
     
    console.log(`[ ${new Date()} ] Server started`);
    return conn.createChannel();
  })
  .then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
      return ch.consume(q, function(msg) {
        console.log(
          `[ ${new Date()} ] Message received: ${JSON.stringify(
            JSON.parse(msg.content.toString('utf8')),
          )}`,
        );
        if (msg !== null) {
          const response = {
            uuid: uuid.v4(),
          };

          console.log(
            `[ ${new Date()} ] Message sent: ${JSON.stringify(response)}`,
          );

          ch.sendToQueue(
            msg.properties.replyTo,
            Buffer.from(JSON.stringify(response)),
            {
              correlationId: msg.properties.correlationId,
            },
          );

          ch.ack(msg);
        }
      });
    });
  })
  .catch(console.warn);
} catch(e) {
    console.log(e)
}
