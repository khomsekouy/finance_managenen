import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {createLinkToken}

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState();

    useEffect(() => {
        const getLinkToken = async() => {
            const data = await 
        }
    }, [token])

  return (
    <div>PlaidLink</div>
  )
}

export default PlaidLink