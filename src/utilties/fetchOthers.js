export const fetchOthers = (url, method, token, data) => {
  fetch(url, {
    method: method,
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res;
      } else return new Error("I am not okay");
    })
    .catch((e) => console.log(e));
};
