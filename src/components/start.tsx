import React, { ReactNode } from 'react'

const NameHeaders = ({children}: {
    children: ReactNode
}) => {
    return <div className='text-Foundation/Pastel-cyan/pastel-cyan-200 text-5xl font-semibold my-3'>
        {children}
    </div>
}

const PassionHeaders = ({children} : {
    children: ReactNode
}) => {
    return (
        <div className='font-2xl text-Foundation/Blue/blue-50 text-2xl my-3'>
            {children}
        </div>
    )
}


function Start() {
  return (
    <section className='h-screen w-screen bg-Foundation/blue-dark/blue-dark-700 flex flex-col items-center justify-center'>
        <div>
        <NameHeaders>
            Yash
        </NameHeaders>
        <NameHeaders>
            Kumar
        </NameHeaders>

        
        <PassionHeaders>
            Software engineering
        </PassionHeaders>
        <PassionHeaders>
            Web Development
        </PassionHeaders>
        <PassionHeaders>
            Electronics
        </PassionHeaders>
        </div>
    </section>
  )
}

export default Start