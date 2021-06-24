import React,{useState} from 'react';
import {Space} from 'antd';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';
import styles from "../../styles/Projects.module.scss";


const allCategories = ['all', ...new Set(items.map((item) => item.category))];


const Projects = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
  
    const filterItems = (category) => {
      if (category === 'all') {
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    };

    return (
        <div className={styles.projects}>
            <section className={styles.menu}>
                <div className={styles.title}>
                    <h2>Project Showcase</h2>
                    <div className={styles.underline}></div>
                </div>
                <Space style={{display : "flex", flexDirection : "column"}} size="large" >
                    <Categories categories={categories} filterItems={filterItems} />
                    <Space>
                        <Menu items={menuItems} />
                    </Space>
                </Space>
            </section>
        </div>
    )
}

export default Projects
