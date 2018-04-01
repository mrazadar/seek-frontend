import React from 'react';
import PropTypes from 'prop-types';

import ListWrapper from './ListWrapper';

const List = ({ list, ItemComponent, itemKey, className }) => {
  this.getItem = (item) => {
    if (itemKey) {
      return item[itemKey];
    }
    return item;
  };
  return (
    <ListWrapper className={className}>
      {
          list.map((item, index) => (
            /* eslint-disable react/no-array-index-key */
            <ItemComponent key={`item-${index}}`} item={this.getItem(item)} />
          ))
        }
    </ListWrapper>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  ItemComponent: PropTypes.func.isRequired,
  itemKey: PropTypes.string,
  className: PropTypes.string,
};

export default List;
