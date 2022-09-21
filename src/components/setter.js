import { useState } from 'react';

const Setter = () => {
  const [values, setValue] = useState({});

  const onchange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    onchange,
  };
};

export default Setter;
