const messages = [];
// chrome://inspect/#workers

self.onconnect = (e) => {
  var port = e.ports[0];

  port.addEventListener('message', (e) => {
    const {type, message} = e.data;
    if(type === 'get') {
      const data = messages.shift();
      port.postMessage(data);
    } else {
      messages.push(message);
    }
  });
  port.start();
}