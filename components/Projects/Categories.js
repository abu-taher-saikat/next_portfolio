import React from 'react';
import styles from '../../styles/Projects.module.scss';
import {Space} from 'antd';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles.btnContainer}>
      {categories.map((category, index) => {
        return (
            <Space size="large">
                <button
                    type="button"
                    className={styles.projectFilterBtn}
                    key={index}
                    onClick={() => filterItems(category)}
                >
                    {category}
                </button>
            </Space>
        );
      })}
    </div>
  );
};

export default Categories;