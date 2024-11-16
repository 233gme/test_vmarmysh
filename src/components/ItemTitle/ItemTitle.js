import {useContext} from "react";
import {StoreContext} from '../../store';
import styles from './ItemTitle.module.css';

export const ItemTitle = ({isShow, isChildren, showChildren, data, parentId, dataName}) => {
  const {setContext} = useContext(StoreContext);
  const icon = isShow ? '∨' : '>';
  const isRoot = data.id === 1;

  const handleAction = (event) => {
    setContext(prev => ({
      ...prev,
      treeName: dataName,
      parentNodeId: parentId,
      nodeName: data.name,
      nodeId: data.id,
      modal: event.target.value
    }));
  };

  return (
    <div className={styles.titleBlock}>
      <div>{isChildren && <button onClick={showChildren}>{icon}</button>} {isRoot ? 'Root' : data.name}</div>

      <div className={styles.buttonBlock}>
        <button onClick={handleAction} value='add'>add</button>
        {
          !isRoot && (
            <>
              <button onClick={handleAction} value='edit'>edit</button>
              <button onClick={handleAction} value='remove'>remove</button>
            </>
          )
        }
      </div>
    </div>
  );
};
