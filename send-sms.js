const accountSid = 'AC2cda3a4ef7609786faf640be2a7dca88';
const authToken = '9e4104f3a09261e4e76fc7308216d9d0';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));