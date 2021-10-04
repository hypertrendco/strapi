import React from 'react';
import { Text } from '@strapi/parts/Text';
import RelativeTime from '../../utils/RelativeTime';

const tableHeaders = [
  {
    name: 'name',
    key: 'name',
    metadatas: {
      label: 'Name',
      sortable: true,
    },
    // eslint-disable-next-line react/prop-types
    cellFormatter: ({ name }) => (
      <Text textColor="Neutral800" bold>
        {name}
      </Text>
    ),
  },
  {
    name: 'description',
    key: 'description',
    metadatas: {
      label: 'Description',
      sortable: false,
    },
    // eslint-disable-next-line react/prop-types
    cellFormatter: ({ description }) => (
      <Text textColor="Neutral800" ellipsis>
        {description}
      </Text>
    ),
  },
  {
    name: 'type',
    key: 'type',
    metadatas: {
      label: 'Token type',
      sortable: false,
    },
    // eslint-disable-next-line react/prop-types
    cellFormatter: ({ type }, _, { formatMessage }) => {
      return (
        <Text textColor="Neutral800" ellipsis>
          {formatMessage({
            id: `Settings.apiTokens.types.${type}`,
            defaultMessage: 'Type unknown',
          })}
        </Text>
      );
    },
  },
  {
    name: 'createdAt',
    key: 'createdAt',
    metadatas: {
      label: 'Created at',
      sortable: false,
    },
    // eslint-disable-next-line react/prop-types
    cellFormatter: ({ createdAt }) => {
      return (
        <Text textColor="Neutral800" ellipsis>
          <RelativeTime timestamp={createdAt} />
        </Text>
      );
    },
  },
];

export default tableHeaders;
