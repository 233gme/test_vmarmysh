import {useContext, useEffect, useState} from "react";
import {StoreContext} from '../../store';
import {postDeleteUser, postRenameUser, postAddser, getUsersTree} from '../../api';
import styles from './Modal.module.css';

export const Modal = ({handleUpdate}) => {
  const {context, setContext} = useContext(StoreContext);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);

  const isShowInput = context.modal !== 'remove';

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (context.modal) {
      case 'add':
        postAddser({...context, nodeName: value})
          .then(message => {
            setMessage(message);
          });
        break;

      case 'edit':
        postRenameUser({...context, newNodeName: value})
          .then(message => {
            setMessage(message);
          });
        break;

      case 'remove':
        postDeleteUser(context)
          .then(message => {
            setMessage(message);
          });
        break;

      default:
        break;
    }
  };

  const handleCancel = () => {
    setValue('');
    setMessage(null);
    setContext(prev => {
      return {...prev, modal: null};
    });
  };

  const handleUpdateData = () => {
    handleCancel();
    getUsersTree()
      .then(data => {
        handleUpdate(data);
      });
  };

  const disableClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    setValue(context?.nodeName || '');
  }, [context?.nodeName]);

  if (!context.modal) {
    return null;
  }


  return (
    <div className={styles.wrapper} onClick={handleCancel}>
      <div className={styles.dialogWrapper} onClick={disableClick}>
        {
          message ? (
            <div>
              <p>{message}</p>
              <div className={styles.buttonBlock}>
                <button onClick={handleUpdateData}>ok</button>
              </div>
            </div>
          ) : (
            <form className={styles.formWrapper} onSubmit={handleSubmit}>
              <p>{context.modal}</p>

              {
                isShowInput && (
                  <input
                    type='text'
                    required
                    minLength="3"
                    value={value}
                    onChange={handleSetValue}
                  />
                )
              }

              <div className={styles.buttonBlock}>
                <button onClick={handleCancel}>cancel</button>
                <button type='submit'>submit</button>
              </div>
            </form>
          )
        }
      </div>
    </div >
  );
};
