import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userServiceApi = createApi({
    reducerPath:'userServiceApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/users'}),
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:({limit,skip})=>`?limit=${limit}&skip=${skip}`
        }),
        getUser:builder.query({
            query:(id)=>`/${id}`
        })
    })

})

export const { useGetUsersQuery , useGetUserQuery} = userServiceApi;