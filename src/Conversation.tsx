import React from 'react';

import { Message } from './assets/types';
import { ChatMessageList } from './components/Chat/ChatMessageList';

interface Props {
  messages: Message[];
}

const Conversation = (props: Props) => {
  return <ChatMessageList {...props} />;
};

export default Conversation;
