import { useState, useEffect } from "react";

const useFetch1 = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch(url)
      .then(res =>res.json())
      .then(data => { 
          setIsPending(false);
          setError(null); 
        setData(data);
      })
      .catch(err=>{
          setError(err.message);
          setIsPending(false);
         console.log(err)
       });   
  },[url]);
   
    return { data, isPending, error };
};
 
export default useFetch1;
