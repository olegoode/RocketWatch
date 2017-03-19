const baseURL = "http://launchlibrary.net/1.2/";

export const getLaunches = (num = 5) => {
  return fetch(`${baseURL}/launch/next/${num}`)
    .then( res => res.json() )
}