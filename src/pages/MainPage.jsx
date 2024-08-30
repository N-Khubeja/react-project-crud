import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const MainPage = () => {

    const {error,response,loading,resendRequest} = useFetch({url:'/api/v1/users',method:'GET'})
    const {sendRequest} = useRequest({method:'DELETE'})
    const userList = response?.items.map(item => {
    return {
            firstname:item.first,
            lastname:item.last,
            id:item._uuid
            }
    }) || []
        
    const ondelete  = (userid) => {
        sendRequest(null,`/api/v1/users/${userid}`)
        .then(() => resendRequest())
    }

    if(loading) return <p>... loading</p>
    if(error) return <p>Something went wrong</p>
    return (
        <div className="App">
        {userList.map((user) => 
            <div className='card' key={user.id}>
              <h2>{user.firstname}</h2>
              <h2>{user.lastname}</h2>
              <Link to={`/update/${user.id}`}>edit</Link>
              <button onClick={() => ondelete(user.id)}>delete</button>
            </div>
        )}
    
        
        </div>
    )
}

export default MainPage