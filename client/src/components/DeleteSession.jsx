import React from "react";
import { deleteSession, fetchUserSessions } from "../api/sessions";

const DeleteSession = ({ sessionId, setSessions, user, token }) => {
  const handleDelete = async () => {
    const deletedSession = await deleteSession(sessionId, token);
    const data = await fetchUserSessions(user.username, token);
    setSessions(data);
    return deletedSession;
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteSession;
