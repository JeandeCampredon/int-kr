import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../assets/color';
import { Store } from '../../assets/store';
import { Message } from '../../assets/types';
import { useStore } from '../../hooks/useStore';
import { getMessageText } from '../../utils/message';
import { Typography } from '../Typography';
import { CHAT_MESSAGE_MAX_WIDTH } from './chatConstants';
import { ChatImage } from './ChatImage';
import { ChatMessageAuthor } from './ChatMessageAuthor';
import { ChatMessageMeta } from './ChatMessageMeta';
import { ChatText } from './ChatText';

const styles = StyleSheet.create({
  message: {
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 5,
    maxWidth: CHAT_MESSAGE_MAX_WIDTH,
  },
  containerSelf: {
    alignItems: 'flex-end',
  },
  containerReply: {
    alignItems: 'flex-start',
  },
  messageReply: {
    backgroundColor: colors.MESSAGE_BACKGROUND_REPLY,
    borderTopLeftRadius: 0,
  },
  messageSelf: {
    backgroundColor: colors.MESSAGE_BACKGROUND_SELF,
    borderTopRightRadius: 0,
  },
  messageText: {
    padding: 10,
  },
});

const getCurrentUserId = (store: Store) => store.currentUserId;

export const ChatMessage = ({ message }: { message: Message }): JSX.Element => {
  const currentUserId = useStore(getCurrentUserId);
  const isMine = currentUserId === message.senderId;
  const messageStyle = useMemo(
    () => [styles.message, isMine ? styles.messageSelf : styles.messageReply],
    [isMine],
  );
  const textToDisplay = getMessageText(message);
  return (
    <View style={isMine ? styles.containerSelf : styles.containerReply}>
      <ChatMessageAuthor senderId={message.senderId} />
      <View style={messageStyle}>
        <ChatImage message={message} />
        <View style={styles.messageText}>
          <Typography variant="body">
            <ChatText text={textToDisplay} />
          </Typography>
        </View>
      </View>
      <ChatMessageMeta createdAt={message.createdAt} />
    </View>
  );
};
