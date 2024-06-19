import HeaderBox from '@/components/HeaderBox'
import RighSidebar from '@/components/RighSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { emit } from 'process'
import React from 'react'

const Home = () => {
   const loggedIn = {firstName: 'Kouy', lastName: 'CRISTIAN', email : 'kouy@kouy.com'}
   
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
           <HeaderBox   
            type = "greeting"
            title="Welcome to"
            user={loggedIn?.firstName || 'Gestion'}
            subtext="Access and manage your account and translations efficiently."
           />

           <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1325.35}
           />
        </header>
         <RighSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 1325.35}, {currentBalance: 1325.35}]}
         />
      </div>
    </section>  
  )
}

export default Home