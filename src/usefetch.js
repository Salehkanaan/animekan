import { useState, useEffect } from "react";
import axios from 'axios';
const useFetch = (url) => { //fetching different data other than blogs
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
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
    useEffect(() => {
       
        const cancelToken = axios.CancelToken.source()
        setTimeout(() => {//message timeout
            axios.get(url,{cancelToken:cancelToken.token})//json fetch
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
        }
    }, [url]); //[] is for dependencies
    return { data, isPending, error }
}
export default useFetch;