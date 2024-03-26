import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import Users from './Users'

export default function Main() {
  const id = useSelector((state)=>state?.State?.id)
  return (
    <div className='container'>
        <div className='container_wrapper'>
            <div className='Nav'>
                <Users />
            </div>
            <div className='content'>
                {/* <Outlet /> */}
                {
                  id > 0 ? <Outlet /> : 'select one Use'
                }
            </div>
        </div>
    </div>
  )
}
