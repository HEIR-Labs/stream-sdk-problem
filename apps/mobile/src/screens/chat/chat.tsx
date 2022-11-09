import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StreamChat, Channel as ChannelType } from 'stream-chat';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  Chat,
  Channel,
  MessageList,
  Thread,
  MessageInput,
  ChannelList,
  MessageType,
  DebugContext,
  OverlayProvider,
} from 'stream-chat-expo';

const client = StreamChat.getInstance('ev7y599k5mqw');

/**
 *  Channel created using a channel id
 */
// const channel = client.channel('messaging', 'heir-chat', {
//   name: 'Heir Chat',
// });

// await channel.create();

export const ChatScreen = () => {
  const [channel, setChannel] = useState<ChannelType>();
  const [clientReady, setClientReady] = useState(false);
  const [thread, setThread] = useState<MessageType | null>();

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: 'mike-fisher',
            name: 'Mike Fisher',
            image: 'https://i.imgur.com/fR9Jz14.png',
          },
          client.devToken('mike-fisher')
        );
        setClientReady(true);
      } catch (e) {
        console.log(e);
      }
    };

    console.log('client before', client.user);
    if (!client.user) {
      setupClient().then(() => {
        console.log('client inside', client.user);
      });
    }
    console.log('setup');
  }, []);

  const onBackPress = () => {
    if (thread) {
      setThread(undefined);
    } else if (channel) {
      setChannel(undefined);
    }
  };

  if (!clientReady) return null;

  return (
    <>
      <OverlayProvider topInset={60}>
        <TouchableOpacity
          onPress={onBackPress}
          disabled={!channel}
        ></TouchableOpacity>
        <View
          style={{
            flex: 1,
            borderTopColor: 'red',
            borderBottomColor: 'green',
            borderWidth: 10,
          }}
        >
          <Chat client={client}>
            <Text>Channel Pizza</Text>
            {channel ? (
              <Channel
                channel={channel}
                keyboardVerticalOffset={60}
                thread={thread}
                threadList={!!thread}
              >
                {thread ? (
                  <Thread />
                ) : (
                  <>
                    <MessageList onThreadSelect={setThread} />
                    <MessageInput />
                  </>
                )}
              </Channel>
            ) : (
              <ChannelList onSelect={setChannel} />
            )}
          </Chat>
        </View>
      </OverlayProvider>
    </>
  );
};
