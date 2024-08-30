import { useNavigate } from 'react-router-dom';
import Users from '../components/Users';
import useRequest from '../hooks/useRequest';

const CreatePage = () => {

    const {loading,sendRequest} = useRequest({url:'/api/v1/users',method:'POST'})
    const navigate = useNavigate()

    const onsubmit = (first,last) => {
      sendRequest([{first,last}])
      .then(() => navigate('/'))
      .catch(err => console.log(err))
    }

    if(loading) return <p>...loading</p>
    return (
        <Users forpost={onsubmit}/>
    )
}

export default CreatePage