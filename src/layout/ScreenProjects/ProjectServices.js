/**
 * Fetches public repositories of a GitHub user.
 * @returns {Promise<Array>} Array of public repositories.
 */
export const getPublicResp = async () => {
  const username = 'vidz231';
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  const resp = await fetch(apiUrl);
  const data = await resp.json();
  console.log(data);
  return data.filter((item) => item.private === false);
};

/**
 * Removes the first four elements from an array if its length is greater than 10.
 * @param {Array} arr - The input array.
 * @returns {Array} - The modified array.
 * @author: vidz231
 */
export const delteFirstFour = (arr) => {
  if (arr.length <= 10) {
    return arr;
  }

  return [arr[0], ...arr.slice(5)];
};
