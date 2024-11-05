class MessageFactory {
    static createMessage(type, content, senderId, recipientId) {
        switch (type) {
            case 'text':
                return new TextMessage(content, senderId, recipientId);
            case 'image':
                return new ImageMessage(content, senderId, recipientId);
            // Add more message types as needed
            default:
                throw new Error('Unknown message type');
        }
    }
}

// Usage in message handler
const message = MessageFactory.createMessage('text', content, senderId, recipientId);
