const APIURL = "/api";

export const authenticateNewUser = async ({
  username,
  firstName,
  lastName,
  password,
}) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, firstName, lastName, password }),
    });

    const result = await response.json();
    console.log("%%%%", result);
    const { user, message, token } = result;
    if (token) {
      localStorage.setItem("token", token);
      return { user, token, message };
    }
    if (!token) {
      return { message };
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const authenticateUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    const { token } = result;
    if (token) {
      localStorage.setItem("token", token);
      return result;
    }
    if (!token) {
      return { message };
    }
    return;
  } catch (err) {
    console.error(err);
  }
};
