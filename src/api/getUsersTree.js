import {BASE_URL, OPTIONS, TREE_NAME} from "./config";

const URL = `${BASE_URL}/api.user.tree.get?treeName=%${TREE_NAME}%7D`;

export async function getUsersTree() {
  try {
    const response = await fetch(URL, OPTIONS);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
