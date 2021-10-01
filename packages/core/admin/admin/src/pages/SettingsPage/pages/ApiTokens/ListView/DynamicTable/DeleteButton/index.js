import React from 'react';
import DeleteIcon from '@strapi/icons/DeleteIcon';
import { IconButton } from '@strapi/parts/IconButton';
import { Box } from '@strapi/parts/Box';
import { stopPropagation } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const DeleteButton = ({ canDelete, tokenName }) => {
  const { formatMessage } = useIntl();

  let component;

  if (canDelete) {
    component = (
      <Box paddingLeft={1} {...stopPropagation}>
        <IconButton
          label={formatMessage(
            {
              id: 'app.component.table.delete',
              defaultMessage: 'Delete {target}',
            },
            { target: tokenName }
          )}
          noBorder
          icon={<DeleteIcon />}
        />
      </Box>
    );
  }

  return component;
};

DeleteButton.defaultProps = {
  canDelete: false,
  tokenName: null,
};

DeleteButton.propTypes = {
  canDelete: PropTypes.bool,
  tokenName: PropTypes.string,
};

export default DeleteButton;
