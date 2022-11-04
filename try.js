export const fetchData = (url) => {
  fetch(url)
    .then((res) => {
      if (res.ok) return res;
      else return new Error("I am not okay");
    })
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export const fetchUpdateData = (url) => {
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: "token",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "user 1",
    }),
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem(
          "login",
          JSON.stringify({ login: true, token: res.token })
        );

        return res;
      } else return new Error("I am not okay");
    })
    .catch((e) => console.log(e));
};

export const fetchWithJwt = (url) => {};
