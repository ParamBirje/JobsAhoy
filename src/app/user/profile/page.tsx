import getServerSideSession from '@/lib/auth/ServerSession'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function ProfilePage() {

  const session = await getServerSideSession()
  if (!session){
    redirect("/user/login")
  }

  return (
    <div>ProfilePage</div>
  )
}
