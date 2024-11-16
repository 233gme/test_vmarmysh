import {BASE_URL, OPTIONS, TREE_NAME} from "./config";

export async function postAddser(value) {
  const url = `${BASE_URL}/api.user.tree.node.create?treeName=%${TREE_NAME}%7D&parentNodeId=${value.parentNodeId}&nodeName=${value.nodeName}`;

  try {
    const response = await fetch(url, OPTIONS);
    let message = 'user created';
    if (!response.ok) message = 'user not created';

    return message;
  } catch (error) {
    console.error(error.message);
  }
}
