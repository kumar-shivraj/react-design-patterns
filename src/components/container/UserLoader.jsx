import axios from "axios";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      // const response = await axios.get("/current-user");
      const response = await axios.get(`http://localhost:9090/users/${userId}`);
      console.log(response);
      setUser(response.data);
    })();
  }, [userId]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
