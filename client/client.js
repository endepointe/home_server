const net = require('net');
const client = new net.Socket();
client.connect(6789, '127.0.0.1', () => {
	console.log('connected');
	client.write('what up, this EP_CLIENT');
});

client.on('data', (data) => {
	console.log('you said: ', data.toString());
	client.destroy();
});

client.on('close', () => {
	console.log('Connection closed');
});