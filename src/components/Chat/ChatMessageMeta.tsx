import React from 'react';
import { FormattedDateParts } from 'react-intl';
import { StyleSheet } from 'react-native';
import colors from '../../assets/color';
import { Typography } from '../Typography';

const styles = StyleSheet.create({
  date: {
    color: colors.MESSAGE_DATE,
  },
});

export const ChatMessageMeta = ({
  createdAt,
}: {
  createdAt: number;
}): JSX.Element => {
  return (
    <FormattedDateParts
      value={createdAt}
      month="numeric"
      year="numeric"
      day="numeric"
      hour="numeric"
      minute="numeric"
      second="numeric"
      hour12>
      {(parts) => (
        <Typography variant="caption" style={styles.date}>
          {parts
            .map((elt: Intl.DateTimeFormatPart): string => elt.value)
            .join('')
            .replace(', ', () => ' - ')}
        </Typography>
      )}
    </FormattedDateParts>
  );
};
