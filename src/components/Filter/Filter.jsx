import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({filter, handleChange}) => {
   
    return (
    <label >
     Find contacts by name
         <input name="filter"
          type="text"
          className="contactInput"
          placeholder="search contact"
          onChange={handleChange}
          value={filter}
            />
    </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}

export default Filter;
