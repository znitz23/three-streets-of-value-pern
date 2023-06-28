const APIURL = "/api";

export const fetchSessions = async (token) => {
  try {
    const response = await fetch(`${APIURL}/sessions/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchUserSessions = async (username, token) => {
  try {
    const response = await fetch(`${APIURL}/sessions/all/${username}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createNewSession = async (
  date,
  game,
  day,
  buy_in,
  cash_out,
  wl,
  notes,
  username,
  duration,
  token
) => {
  try {
    const response = await fetch(`${APIURL}/sessions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        date,
        game,
        day,
        buy_in,
        cash_out,
        wl,
        notes,
        username,
        duration,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteSession = async (sessionId, token) => {
  try {
    const response = await fetch(`${APIURL}/sessions/${sessionId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
};
