import {useEffect, useState} from "react";
import {ListItem, List, Modal} from "./components";
import {getUsersTree} from './api';
import {ContextProvider} from './store'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUsersTree()
      .then(data => {
        setData(data);
      });
  }, []);

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <ContextProvider>
      <List>
        <ListItem data={data} parentId={data.id} dataName={data.name} />

        <Modal handleUpdate={setData} />
      </List>
    </ContextProvider>
  );
}

export default App;
