import HeaderBox from '@/components/HeaderBox'
import RighSidebar from '@/components/RighSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
   const loggedIn = {firstName: 'Kouy'}
   
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
            banks={[]}
         />
      </div>
    </section>  
  )
}

export default Home