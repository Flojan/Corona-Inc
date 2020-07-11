export const sendRegister = async (username, password) => {
  const response = await fetch(
    "http://server.bykovski.de:8000/users/register",
    {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    }
  );
  // setAlertType(true);
  // setInfoAlert("Register successful");
  // setTimeout(() => {
  //   sendLogin(username, password);
  // }, 1000);
  return response;
  // } else {
  //   // setInfoAlert("Register failed");
  //   // setAlertType(false);

  // }
};

export const sendLogin = async (username, password) => {};
