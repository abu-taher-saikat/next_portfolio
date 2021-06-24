import React from 'react';
import Image from 'next/dist/client/image';
import styles from '../../styles/Projects.module.scss';
import { Tooltip } from 'antd';
import { Card, Avatar, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined ,GithubOutlined } from '@ant-design/icons';
const { Meta } = Card;


const Menu = ({ items }) => {
  return (
    <Space className={styles.sectionCenter}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price, github } = menuItem;
        return (
            <div key={id} className={styles.preCard}>
                <Card
                    key={id} className={styles.card}
                    cover={
                        <img
                            src={img}
                            className={styles.photo}
                        />
                    }
                    actions={[
                        <Tooltip title="Click to get Code">
                            <GithubOutlined key="github" />
                        </Tooltip>,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={title}
                        description={desc}
                    />
                </Card>
          </div>
        );
      })}
    </Space>
  );
};

export default Menu;