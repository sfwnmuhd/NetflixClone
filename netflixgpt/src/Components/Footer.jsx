import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black px-[400px] py-[70px]'>
        <div className='mb-5'>
            <h2 className='text-white '>Questions? Call 000-800-919-1743(Toll-Free)</h2>
        </div>
        <div className='flex text-sm'>
            <div className='mr-50'>
                <h2 className='text-white underline mb-5'>FAQ</h2>
                <h2 className='text-white underline'>Cookie Preference</h2>
            </div>
            <div className='mr-50'>
                <h2 className='text-white mb-5 underline'>Help Centre</h2>
                <h2 className='text-white underline'>Corporate Information</h2>
            </div>
            <div className='mr-50'>
                <h2 className='text-white underline'>Terms of Use</h2>
            </div>
            <div>
                <h2 className='text-white underline'>Privacy</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer