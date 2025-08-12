// components/src/service/socketService.ts
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:3000"; // can i automate this?
let socket: Socket | null = null;

// : Socket | null: Type annotation (TypeScript).
// Socket: The variable can hold an instance of the Socket type (probably from a library like socket.io-client).
// | null: The variable can also be null, representing no active connection.
// = null: The variable is initialized to null, meaning there is no socket connection at the star

export const initSocket = () => {
  if (!socket) {
    socket = io(SERVER_URL, { transports: ["websocket"] });

    socket.on("connect", () => console.log(" Connected baby lets go Mr/Mrs:", socket?.id));
    socket.on("disconnect", () => console.log(" Disconnected"));
  }
};

export const sendMessage = (msg: string) => {
  socket?.emit("send_message", msg);
};

export const onMessageReceived = (callback: (msg: string) => void) => {
  socket?.on("receive_message", callback);
};
