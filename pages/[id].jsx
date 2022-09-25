import next from "next"
import {useRouter} from 'next/router'
export default subject = async () =>{
    const router = useRouter()
    // const {id} = router.
    return(
        <>
        <h1>{router.query.id}</h1>
        </>
    )
}