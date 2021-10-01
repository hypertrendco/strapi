import React from 'react';
import { Text } from '@strapi/parts/Text';

const tableHeaders = [
  {
    name: 'name',
    key: 'name',
    metadatas: {
      label: 'Name',
      sortable: true,
    },
    // eslint-disable-next-line react/prop-types
    cellFormatter: ({ name }) => <Text bold>{name}</Text>,
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
    cellFormatter: ({ type }) => (
      <Text textColor="Neutral800" ellipsis>
        {type === 'read-only' ? 'Read-only' : 'Full access'}
      </Text>
    ),
  },
  {
    name: 'createdAt',
    key: 'createdAt',
    metadatas: {
      label: 'Created at',
      sortable: false,
    },
  },
];

export default tableHeaders;
