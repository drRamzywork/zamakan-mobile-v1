import PageHeader from '@/components/Cities/PageHeader'
import Verses from '@/components/Cities/Verses'
import React from 'react'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const Cities = () => {
  return (
    <>

      <div id='cities' style={...Effra.style}>
        <PageHeader />
        <Verses />
      </div >

      <Footer />
    </>

  )
}

export default Cities