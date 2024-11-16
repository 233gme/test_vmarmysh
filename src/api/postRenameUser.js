import {BASE_URL, OPTIONS, TREE_NAME} from "./config";

export async function postRenameUser(value) {
  const url = `${BASE_URL}/api.user.tree.node.rename?treeName=%${TREE_NAME}%7D&nodeId=${value.nodeId}&newNodeName=${value.newNodeName}`;

  try {
    const response = await fetch(url, OPTIONS);
    let message = 'user renamed';
    if (!response.ok) message = 'user not renamed';

    return message;
  } catch (error) {
    console.error(error.message);
  }
}
