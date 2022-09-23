import { useState } from 'react';

const Setter = () => {
  const [values, setValues] = useState({});

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    onchange,
    setValues,
  };
};

export const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AvIE67KLnFDsdhR2CWwG/books';

export default Setter;
