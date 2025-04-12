import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
      })}
    </>
  );
};

export default DataSource;
