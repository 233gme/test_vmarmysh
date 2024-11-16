import {BASE_URL, OPTIONS, TREE_NAME} from "./config";

export async function postDeleteUser(value) {
  const url = `${BASE_URL}/api.user.tree.node.delete?treeName=%${TREE_NAME}%7D&nodeId=${value.nodeId}`;

  try {
    const response = await fetch(url, OPTIONS);
    let message = 'user deleted';
    if (!response.ok) message = 'user not deleted';

    return message;
  } catch (error) {
    console.error(error.message);
  }
}
