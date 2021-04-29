import { useState, useEffect, useContext } from 'react';
import { ProskommaContext } from '../ProskommaContext';

export default function useQuery(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { pk } = useContext(ProskommaContext);

  useEffect(() => {
    async function runQuery() {
      try {
        setLoading(true);
        setErrors(null);

        const { errors, data } = await pk.gqlQuery(query);
        if (errors) setErrors(errors);
        if (data) setData(data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrors([error]);
      }
    }

    runQuery();
  }, [query]);

  return { loading, errors, data };
}

// function useUsfm(props) {
//   const query = getTemplate(props)

//   return useQuery(query);
// }