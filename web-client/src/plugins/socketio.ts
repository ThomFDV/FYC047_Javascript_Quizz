import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';

export default new VueSocketIO({
  debug: true,
  // @ts-expect-error
  connection: SocketIO('http://localhost:3000'),
});
