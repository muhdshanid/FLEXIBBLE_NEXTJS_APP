"use client"

import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Button from './Button';
import { Provider } from '@/types/types';

type Providers = Record<string, Provider>;



const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
      const fetchProviders = async () => {
          const res = await getProviders();
          setProviders(res);
      }
      fetchProviders();
  }, []);

  if(providers) {
    return (
      <div>
        {
          Object.values(providers).map((provider: Provider,i: number) =>
          <button onClick={() => signIn(provider?.id)} key={i}>{provider.id}</button> )
        }
      </div>
    )
  }
}

export default AuthProviders