import { useEffect, useState } from 'react'
import axios from 'axios';

export default function UseBookSearch(query, pageNumber) {
    // console.log(query);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)


    let cancel;
    useEffect(() => {
        setLoading(true);
        setError(false)
        //console.log(query);
        axios({
            methor: 'GET',
            url: 'https://5eafcfbc0605ed0016d2ce2c.mockapi.io/test',
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken( c => cancel = c )
        }).then(res =>{
            setBooks( prevBooks =>{
                return [...prevBooks, res.data.map(b => b.name)]
            })
            //console.log(res.data);
        }).catch(e =>{
            if(axios.isCancel(e)) return
        })

        return () => cancel()

    }, [query, pageNumber])
    return null
}
