import { Message } from '../assets/types';

export const getMessageText = (message: Message): string => {
  const text = 'content' in message ? message.content : message.caption;

  return text || '';
};

export const getMessageImageSource = (
  message: Message,
): { uri: string } | null => {
  const url = 'url' in message ? message?.url : null;

  return url ? { uri: url } : null;
};
