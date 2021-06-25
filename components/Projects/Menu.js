import React from 'react';
import Image from 'next/image';
// import Image from 'next/dist/client/image';
import styles from '../../styles/Projects.module.scss';
import { Tooltip } from 'antd';
import { Card, Avatar, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined ,GithubOutlined } from '@ant-design/icons';
import def from '../../public/images/default.jpg';
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
                        // <img
                        //     src={img}
                        //     className={styles.photo}
                        // />
                        <Image 
                          src={img ? img : def} 
                          width="100%" 
                          height="200" 
                          className={styles.photo}
                          alt={title}
                        ></Image>
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


// export async function getStaticProps() {
//   const photos = await fetch("http://unsplash.it/400?random&gravity=center")
//   console.log(`res`, res)
//   // const photos = await res.json();
//   console.log(`photos`, photos)
//   return {
//     props : {photos},
//     revalidate: 1,
//   }
// }

export default Menu;