import { useSelector , useDispatch} from "react-redux"
import { useGetUserQuery } from '../Services/ApiService';
import { Oval } from 'react-loader-spinner'
import { setId } from "../Services/slices";
import { Tuple } from "@reduxjs/toolkit";

export default function Userinfo(){
    const id = useSelector((state)=>state?.State?.id)
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetUserQuery(id);

console.log(id)
    const decrement = ()=>{
        if(id > 1){
            dispatch(setId(id - 1))
        }
    }

    const increment = ( )=>{
        if(id < 22){
            dispatch(setId(id + 1))
        }
    }

    return(
        isLoading ? <div className='Loading'>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#000"
                ariaLabel="oval-loading"
            />
        </div> :
            <div className="info_wrapper">
                <div className="info_top">
                <img src={data?.image} alt={data?.username} />
                <div className="info">
                    <li><b>username</b>: {data?.username}</li>
                    <li><b>age</b>: {data?.age}</li>
                    <li><b>birthDate</b>: {data?.birthDate}</li>
                    <li><b>email</b>: {data?.email}</li>
                    <li><b>gender</b>: {data?.gender}</li>
                    <li><b>city</b>: {data?.address?.city}</li>
                </div>
                </div>
                <div className="info_buttom">
                    <button onClick={()=>decrement()} disabled={id <= 1 && true}>Pre</button>
                    <button onClick={()=>increment()} disabled={id >= 22 && true}>Next</button>
                </div>
            </div>
    )
}