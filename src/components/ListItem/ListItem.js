import {useState} from "react";
import {ItemTitle} from '../ItemTitle';
import styles from './ListItem.module.css';

export const ListItem = ({data, parentId, dataName}) => {
  const [isOpen, setIsOpen] = useState(null);

  const isShow = data.id === isOpen;
  const isChildren = Boolean(data.children.length);

  const showChildren = () => {
    if (isOpen) {
      setIsOpen(null);
      return;
    }

    setIsOpen(data.id);
  };

  return (
    <div className={styles.wrapper}>
      <ItemTitle
        dataName={dataName}
        parentId={parentId}
        isShow={isShow}
        isChildren={isChildren}
        data={data}
        showChildren={showChildren}
      />

      {
        isShow && (
          <div className={styles.listBox}>
            {data.children.map(child => (
              <ListItem
                parentId={data.id}
                key={child.id}
                data={child}
              />
            ))}
          </div>
        )
      }
    </div>
  );
};
