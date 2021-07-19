import React, { useCallback } from 'react';

import { Store } from '../../assets/store';
import { useStore } from '../../hooks/useStore';
import { Typography } from '../Typography';

export const ChatMessageAuthor = ({
  senderId,
}: {
  senderId: string;
}): JSX.Element => {
  const getAuthorName = useCallback(
    (store: Store) => store.users.find((elt) => elt.id === senderId)?.username,
    [senderId],
  );

  const name = useStore(getAuthorName);

  return <Typography variant="sub">{name}</Typography>;
};
