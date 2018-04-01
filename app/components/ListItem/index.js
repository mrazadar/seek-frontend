import React from 'react';
import PropTypes from 'prop-types';


import ListItemWrapper from './ListItemWrapper';


const ListItem = ({ item, className }) => (
  <ListItemWrapper className={className}>
    <p>{item.name}</p>
  </ListItemWrapper>
  );


ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ListItem;
