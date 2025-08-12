// components/src/service/socketService.ts
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:3000"; // replace with your server's LAN IP
let socket: Socket | null = null;

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
