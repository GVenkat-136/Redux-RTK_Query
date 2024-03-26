import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useGetUsersQuery } from '../Services/ApiService';
import { Oval } from 'react-loader-spinner'
import { setId, } from '../Services/slices';


export default function Users() {
    const dispatch = useDispatch()
    const id = useSelector((state)=>state?.State?.id)
    const { data, error, isLoading } = useGetUsersQuery({ limit: 22, skip: 0 });


    return (
        <div>

            {isLoading ?
                <div className='Loading'>
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#000"
                        ariaLabel="oval-loading"
                    />
                </div>
                :
                <div className='users'>
                    {
                        data?.users?.map(user => (
                            <li key={user?.id} style={{ background : id === user?.id && '#000' , color : id === user?.id && '#fff' }} onClick={()=>dispatch(setId(user?.id))}>{user?.username}</li>
                        ))
                    }
                </div>
            }
        </div>
    )
}
