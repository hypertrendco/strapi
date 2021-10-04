import React from 'react';
import { Text } from '@strapi/parts/Text';
import { Tbody, Tr, Td } from '@strapi/parts/Table';
import { Row } from '@strapi/parts/Row';
import { DynamicTable, NoContent } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Button } from '@strapi/parts/Button';
import AddIcon from '@strapi/icons/AddIcon';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import tableHeaders from '../utils/tableHeaders';

const Table = ({ canDelete, canUpdate, apiTokens, isLoading }) => {
  const { formatMessage } = useIntl();

  if (apiTokens) {
    return (
      <DynamicTable
        headers={tableHeaders}
        contentType="api-tokens"
        rows={apiTokens}
        withBulkActions={canDelete || canUpdate}
        isLoading={isLoading}
      >
        <Tbody>
          {apiTokens.map(apiToken => {
            return (
              <Tr key={apiToken.id}>
                {tableHeaders.map(({ key, cellFormatter, name, ...rest }) => {
                  return (
                    <Td key={key}>
                      {typeof cellFormatter === 'function' ? (
                        cellFormatter(apiToken, { key, name, ...rest }, { formatMessage })
                      ) : (
                        <Text textColor="neutral800">{apiToken[name] || '-'}</Text>
                      )}
                    </Td>
                  );
                })}
                {(canUpdate || canDelete) && (
                  <Td>
                    <Row justifyContent="end">
                      <UpdateButton canUpdate={canUpdate} tokenName={apiToken.name} />
                      <DeleteButton canDelete={canDelete} tokenName={apiToken.name} />
                    </Row>
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </DynamicTable>
    );
  }

  return (
    <NoContent
      content={{
        id: 'Settings.apiTokens.emptyStateLayout',
        defaultMessage: 'Add your first API Token',
      }}
      action={
        <Button variant="secondary" startIcon={<AddIcon />}>
          {formatMessage({
            id: 'Settings.apiTokens.addNewToken',
            defaultMessage: 'Add new API Token',
          })}
        </Button>
      }
    />
  );
};

Table.defaultProps = {
  canDelete: false,
  canUpdate: false,
  apiTokens: [],
  isLoading: true,
};

Table.propTypes = {
  canDelete: PropTypes.bool,
  canUpdate: PropTypes.bool,
  apiTokens: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Table;
