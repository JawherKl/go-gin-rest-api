class WebSocketSingleton {
    constructor() {
        if (!WebSocketSingleton.instance) {
            this.connection = new WebSocket.Server({ port: 5001 });
            WebSocketSingleton.instance = this;
        }
        return WebSocketSingleton.instance;
    }
}
