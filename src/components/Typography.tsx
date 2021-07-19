import React, { ReactNode, useMemo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontSize: 15,
  },
  bodyBold: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  sub: {
    fontSize: 12,
    fontWeight: '200',
  },
  caption: {
    fontSize: 10,
  },
});

interface TypographyProps extends TextProps {
  variant: keyof typeof styles;
  children: string | ReactNode | string[];
}

export const Typography = ({
  variant,
  style,
  ...props
}: TypographyProps): JSX.Element => {
  const styleToUse = useMemo(() => [style, styles[variant]], [style, variant]);

  return <Text style={styleToUse} {...props} />;
};
