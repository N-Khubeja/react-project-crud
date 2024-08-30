import { useRef } from "react"


const Users = ({forpost,firstname,lastname}) => {
   
    const firstref = useRef()
    const lastref = useRef()

    const submit = (e) => {
        e.preventDefault()

        if(firstref.current && lastref.current){
            forpost(firstref.current.value,lastref.current.value)
        } else {
            console.log('error')
        }

    }


    return(
        <form className="form" onSubmit={submit}>
            <input type="text" placeholder="firstname" defaultValue={firstname} ref={firstref} />
            <input type="text" placeholder="lastname" defaultValue={lastname} ref={lastref}/>
            <button type="submit">submit</button>
        </form>

    )
}

export default Users