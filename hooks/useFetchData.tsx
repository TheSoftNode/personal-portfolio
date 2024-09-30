import { useEffect, useState } from 'react';

// Define the hook to accept any type T
const useFetchData = <T,>(url: string, key: any = null, requireToken: boolean = true) => {
  const [data, setData] = useState<T | null>(null); // Make it flexible for any data structure
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let res;
        if (requireToken === false) {
          res = await fetch(url);
        } else {
          // Add token logic here if required
          // res = await fetch(url, {
          //     headers: { Authorization: `Bearer ${token}` }
          // });
        }

        const result = await res?.json();

        if (!res?.ok) {
          setError(result.message);
        } else {
          setData(result?.data?.data as T); // Cast fetched data as type T
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, key]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;




// import { useContext, useEffect, useState } from 'react'
// // import { authContext } from '../context/AuthContext';

// const useFetchData = (url: any, key = null, requireToken = true) =>
// {

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // const { token } = useContext(authContext);

//     useEffect(() =>
//     {
//         const fetchData = async () =>
//         {
//             setLoading(true);

//             try
//             {
//                 let res;
//                 if (requireToken === false)
//                 {
//                     res = await fetch(url)
//                 }
//                 else
//                 {
//                     // res = await fetch(url, {
//                     //     headers: { Authorization: `Bearer ${token}` }
//                     // })
//                 }

//                 const result = await res?.json();

//                 if (!res?.ok)
//                 {
//                     setError(result.message);
//                 }

//                 setData(result?.data?.data);
//                 setLoading(false);
//             } catch (error: any)
//             {
//                 setLoading(false);
//                 setError(error.message);
//             }
//         }
//         fetchData();
//     }, [url, key])

//     return {
//         data, loading, error
//     }
// }

// export default useFetchData