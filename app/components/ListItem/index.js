import React from 'react';
import PropTypes from 'prop-types';


import ListItemWrapper from './ListItemWrapper';


const ListItem = ({ item, className }) => (
  <ListItemWrapper className={className} adType={item.ad_type}>
    <div className="title">
      <div>{item.title}</div>
      {item.logo ? (<div className="logo"><img src={item.logo} alt="Logo" /></div>) : null}
    </div>
    <p className="desc">{item.description}</p>
  </ListItemWrapper>
  );


ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ListItem;
