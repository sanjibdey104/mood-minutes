import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase/initFirebase";

export const FetchMoodLogs = () => {
  const { authUser } = useContext(AuthContext);
  const { uid } = authUser;
  const [moodLogs, setMoodLogs] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection(`/users/${uid}/moodLogs`)
      .orderBy("loggedAt", "desc")
      .onSnapshot((querySnapshot) => {
        let logs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }));
        setMoodLogs(logs);
      });
    return () => unsubscribe();
  }, [uid]);

  return moodLogs;
};
