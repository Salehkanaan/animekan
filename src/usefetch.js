import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const cancelToken = axios.CancelToken.source();
        setTimeout(() => {//message timeout
         axios.get(url, { cancelToken: cancelToken.token })//json fetch
                .then((res) => {
                    setData(res.data);
                    setIsPending(false);
                    setError(null);
                }).catch(err => {
                    if (axios.isCancel(err)) {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);
       
        return () => {
            cancelToken.cancel();
        };
       
        }, [url]);
    return { data, isPending, error };
};

export default useFetch;
//     const cancelToken = axios.CancelToken.source();

//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(url, { cancelToken: cancelToken.token,{
//                     headers: {
//                         'Authorization': `Bearer YOUR_ACCESS_TOKEN_HERE`
//                     }
// }});
//                 setData(response.data);
//                 setIsPending(false);
//                 setError(null);
//             } catch (err) {
//                 if (axios.isCancel(err)) {
//                     console.log('Fetch aborted');
//                 } else {
//                     setError(err.message);
//                     setIsPending(false);
//                 }
//             }
//         };

//         fetchData();

//         return () => {
//             cancelToken.cancel(); // Cleanup if the component unmounts
//         };
//     }, [url]);
//     useEffect(() => {
//         const abortCont =new AbortController();
//         setTimeout(() => {//message timeout
//             fetch(url,{signal:abortCont.signal})//json fetch
//                 .then(res => {
//                     if (!res.ok) {
//                         throw Error('could not fetch  the data for that resource')
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     setData(data);
//                     setIsPending(false);
//                     setError(null);
//                 }).catch(err => {
//                     if(err.name==='AbortError'){
//                         console.log('fetch aborted');
//                     }else{
//                     setError(err.message);
//                     setIsPending(false);
//                     }
//                 })
//         }, 1000);
// return ()=>{
//    abortCont.abort(); 
// }
//     }, [url]); 