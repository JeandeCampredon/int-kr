import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../assets/color';
import { Store } from '../../assets/store';
import { useStore } from '../../hooks/useStore';

const styles = StyleSheet.create({
  mention: {
    color: colors.MESSAGE_TAG,
    fontWeight: '600',
  },
});

const getUsernames = (store: Store) => store.users.map((elt) => elt.username);

/**
 * A dumb component
 */
export const ChatText = ({ text }: { text: string }): JSX.Element => {
  const usernames = useStore(getUsernames);
  const indexes: { index: number; username: string }[] = usernames
    .map((username: string) => ({
      index: text.indexOf(`@${username}`),
      username,
    }))
    .filter(({ index }) => index > -1)
    .filter(({ index, username }) => {
      const ind = index + username.length + 1;
      const value = text.slice(ind, ind + 1);
      return !/[a-z]/i.test(value);
    })
    .sort(({ index: indexA }, { index: indexB }) =>
      indexA - indexB > 0 ? 1 : -1,
    );

  const firstIndex = indexes[0];

  if (!firstIndex) return <Text>{text}</Text>;

  return (
    <>
      {text.slice(0, firstIndex.index)}
      <Text style={styles.mention}>@{firstIndex.username}</Text>
      <ChatText
        text={text.slice(firstIndex.index + firstIndex.username.length + 1)}
      />
    </>
  );
};
