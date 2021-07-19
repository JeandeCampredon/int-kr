import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Image, StyleSheet } from 'react-native';
import { Message } from '../../assets/types';
import { getMessageImageSource } from '../../utils/message';
import { CHAT_MESSAGE_MAX_WIDTH } from './chatConstants';

const styles = StyleSheet.create({
  image: {
    minWidth: (CHAT_MESSAGE_MAX_WIDTH * 2) / 3,
    maxHeight: 400,
    height: 1,
    resizeMode: 'contain',
  },
});

export const ChatImage = ({
  message,
}: {
  message: Message;
}): JSX.Element | null => {
  const [ratio, setRatio] = useState(0);
  const [imageWidth, setWidth] = useState(0);
  const imageSource = useMemo(() => getMessageImageSource(message), [message]);
  const uri = imageSource?.uri;
  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }) => {
      setWidth(width);
    },
    [setWidth],
  );

  useEffect(() => {
    if (!uri) return;

    Image.getSize(
      uri,
      (width, height) => {
        setRatio(height / Math.max(width, 1));
      },
      // @TODO handle gracefully failure
    );
  }, [uri, setRatio]);

  const style = useMemo(
    () =>
      imageWidth && ratio
        ? [styles.image, { height: imageWidth * ratio }]
        : null,
    [imageWidth, ratio],
  );

  if (!imageSource) return null;

  return <Image onLayout={onLayout} source={imageSource} style={style} />;
};
