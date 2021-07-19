import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Message } from '../../assets/types';
import { ChatMessage } from './ChatMessage';

const styles = StyleSheet.create({
  container: {
    transform: [{ scale: -1 }],
  },
  content: {
    paddingHorizontal: 10,
  },
  items: {
    marginTop: 15,
    transform: [{ scale: -1 }],
  },
});

const renderMessageItem = ({ item }: { item: Message }) => (
  <View style={styles.items}>
    <ChatMessage message={item} />
  </View>
);

const messageKeyExtractor = (message: Message) =>
  `${message.createdAt}-${message.senderId}`;

export const ChatMessageList = ({ messages }: { messages: Message[] }) => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={messages}
      renderItem={renderMessageItem}
      keyExtractor={messageKeyExtractor}
    />
  );
};
