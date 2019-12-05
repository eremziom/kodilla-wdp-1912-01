import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      {/* <select name='' id=''>
        <option value=''>Select a category</option>
      </select> */}
      <ul>
        <li>
          <a>furniture</a>
          <ul>
            <li>test1</li>
            <li>test 2</li>
          </ul>
        </li>
        <li>
          <a>chair</a>
          <ul>
            <li>test2</li>
          </ul>
        </li>
        <li>
          <a>table</a>
          <ul>
            <li>test3</li>
          </ul>
        </li>
        <li>
          <a>sofa</a>
          <ul>
            <li>test4</li>
          </ul>
        </li>
        <li>
          <a>bedroom</a>
          <ul>
            <li>test5</li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
