export const useAuthentication = () => {
  const _data = localStorage.getItem("jwt");
  let data = {
    login: null,
    token: null,
  };
  if (_data) {
    data = JSON.parse(_data);
    return { login: data.login, token: data.token };
  }
  return data;
};
