const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//Get User
export const fetchUser = async (text) => {
  const param = new URLSearchParams({
    q: text,
  });
  const responce = await fetch(`${GITHUB_URL}/search/users?${param}`, {
    headers: {
      Authorization: `${GITHUB_TOKEN}`,
    },
  });
  const { items } = await responce.json();
  return items;
};

//Get Single User
export const getUser = async (login) => {
  const responce = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `${GITHUB_TOKEN}`,
    },
  });
  if (responce.status === 400) {
    window.location = "/notfound";
  } else {
    const data = await responce.json();
   return data;
  }
};
