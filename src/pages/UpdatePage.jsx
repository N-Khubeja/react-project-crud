import { useNavigate, useParams } from "react-router-dom"
import Users from "../components/Users"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const UpdatePage = () => {
    
    const navigate = useNavigate()
    const {userid} = useParams()
    const {error,loading,response} = useFetch({url:`/api/v1/users/${userid}`,method:'GET'})
    console.log(response)
    const {sendRequest} = useRequest({url:`/api/v1/users/${userid}`,method:'PUT'})
    
    const onsubmit = (first,last) => {
        sendRequest({first,last})
        .then(() => navigate('/'))
        .catch((err) => console.log(err))
    }

    if(loading && !response) return <p>...loading</p>
    if(error || !response) return <p>...error</p>
    return(
        <div>

        <Users forpost={onsubmit} firstname={response.first} lastname={response.last}/>

            
        </div>
    )
}


export default UpdatePage