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
