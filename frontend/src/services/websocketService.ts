import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let client: Client | null = null;

export const connectWebSocket = (
  onMessage: (data: any) => void
) => {

const socket = new SockJS(
"https://load-balancer-simulator-oy2d.onrender.com/ws"
);

  client = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,
  });

client.onConnect = () => {

  console.log("WebSocket Connected");

  client?.subscribe(
    "/topic/servers",
    (message) => {

      console.log("MESSAGE RECEIVED");
      console.log(message.body);

      const data = JSON.parse(message.body);

      onMessage(data);
    }
  );
};
client.onStompError = (frame) => {
  console.error("STOMP ERROR", frame);
};

client.onWebSocketError = (error) => {
  console.error("WEBSOCKET ERROR", error);
};
  client.activate();
};

export const disconnectWebSocket = () => {

  client?.deactivate();
};