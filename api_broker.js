const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');

const options = {
    clientId: "node-user",
    username: 'user_name',
    password: 'user_pass',
    port: 'server_port',
}

const client = mqtt.connect('mqtt://server_adress',options);
const app = express();

client.subscribe('topic');
/*
client.subscribe('topic1');
client.subscribe('topic2');
*/

app.use(cors());

app.get('/',(req,res) => {
    client.publish("topic","route '/' ");
    res.send("Publish made");
});

/*
Other requisitions 

*/

app.listen(4000,() => {
    console.log("Connected to port's");
});