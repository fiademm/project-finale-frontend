import { useEffect, useState } from 'react';
import { Chat, Channel, ChannelList, ChannelHeader, MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

const apiKey = 'cm5fsf6rc8xz';
const clientUser1 = new StreamChat(apiKey);
const clientUser2 = new StreamChat(apiKey);

// Generate random user IDs and tokens for testing
const randomUserId1 = Math.random().toString(36).substring(7);
const randomUserId2 = Math.random().toString(36).substring(7);

const user1 = { id: randomUserId1, name: `User 1` };
const user2 = { id: randomUserId2, name: `User 2` };

// Set the same token for both users or use dummy tokens for testing
const token = 'dummy-token';

const generateRandomMessage = (userId, messageId) => {
  return {
    id: messageId,
    text: `Random message ${messageId}`,
    user: {
      id: userId,
      name: `User ${userId}`,
    },
  };
};

const simulateChat = (client, otherClient) => {
  const channelId = 'test-channel';
  const channel = client.channel('messaging', channelId);

  let messageCount = 0;

  setInterval(() => {
    const randomMessage = generateRandomMessage(client.user.id, messageCount.toString());
    channel.sendMessage(randomMessage);
    messageCount++;
  }, 3000);

  channel.watch();

  client.on('message.new', (event) => {
    const message = event.message;
    if (message.user.id !== client.user.id) {
      console.log(`New message received: ${message.text}`);
    }
  });
};

const Chats = () => {
  // Set the user and token for each client instance
  clientUser1._setUser(user1, token);
  clientUser2._setUser(user2, token);

  useEffect(() => {
    simulateChat(clientUser1, clientUser2);
    simulateChat(clientUser2, clientUser1);
  }, []);

  return (
    <>
      <Chat client={clientUser1} theme="messaging dark">
        <ChannelList />
        <Channel>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Channel>
      </Chat>
      <Chat client={clientUser2} theme="messaging dark">
        <ChannelList />
        <Channel>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Channel>
      </Chat>
    </>
  );
};

export default Chats;