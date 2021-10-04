import React from 'react';
import { intervalToDuration } from 'date-fns';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const RelativeTime = ({ timestamp }) => {
  const { formatRelativeTime, formatDate, formatTime } = useIntl();

  const interval = intervalToDuration({
    start: new Date(timestamp),
    end: new Date(),
  });

  const unit = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'].find(intervalUnit => {
    return interval[intervalUnit] > 0 && Object.keys(interval).includes(intervalUnit);
  });

  return (
    <time dateTime={timestamp} title={`${formatDate(timestamp)} ${formatTime(timestamp)}`}>
      {formatRelativeTime(-interval[unit], unit, { numeric: 'auto' })}
    </time>
  );
};

RelativeTime.propTypes = {
  timestamp: PropTypes.string.isRequired,
};

export default RelativeTime;
