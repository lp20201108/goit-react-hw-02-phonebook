import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({filter, handleChange}) => {
   
    return (
        <label className={styles.label} >
            Find contacts by name
            <input
          className={styles.inputFilter}
          name="filter"
          type="text"
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
