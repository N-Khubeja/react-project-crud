import { useCallback, useEffect, useState } from "react"

const useFetch = ({url,method}) => {
    const [loading,setloading] = useState(false)
    const [error,seterror] = useState(null)
    const [response,setresponse] = useState(null)

    const onFetch = useCallback(() => {
        setloading(true)
        fetch(url,{
            method,
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
        .then((res) => {
            if(!res.ok) throw new Error('get failed')
              return res.json()
        })
        .then((data) => setresponse(data))
        .catch(err => seterror(err))
        .finally(() => setloading(false))

        return(() => {
            seterror(null)
            setresponse(null)
            setloading(false)
        })
    },[url,method])


    useEffect(() => {
        onFetch()
    },[onFetch])

    return {response,error,loading,resendRequest:onFetch}
}

export default useFetch