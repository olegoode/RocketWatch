const baseURL = 'https://launchlibrary.net/1.2/';

export const getLaunches = (num = 20) => {
  return fetch(`${baseURL}/launch/next/${num}`)
    .then(res => res.json());
};
