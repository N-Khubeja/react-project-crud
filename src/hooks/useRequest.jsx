import { useState } from "react"

const useRequest = ({url,method}) => {
    const [loading,setloading] = useState()

    const sendRequest = async (body,custom) => {
        setloading(true)
       const res = await fetch(url || custom,{
        method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body:!!body && method !== 'GET' ? JSON.stringify(body) : undefined
       })

       const data = await res.json()
       setloading(false)
       console.log(data)
       return data
    }

    return {loading,sendRequest}
}

export default useRequest