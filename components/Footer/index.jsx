import React from 'react'
import styles from './index.module.scss'
import {
  TimeSquare, SaudiIconMap, SaveMark
  , Boxes
} from '@/assets/svgs'
import Link from 'next/link'

const Footer = () => {
  ;
  return (
    <footer id={styles.footer} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#fff', padding: '10px 0', display: 'flex', justifyContent: 'space-around', borderTop: '0.5px solid #ccc' }}>
      <Link href='/' className={styles.icon_container}>
        <SaudiIconMap />
      </Link>


      <Link href='/' className={styles.icon_container}>
        <TimeSquare />
      </Link>


      <Link href='/' className={styles.icon_container}>
        <SaveMark />
      </Link>
      <Link href='/' className={styles.icon_container}>
        <Boxes />

      </Link>
    </footer>
  )
}

export default Footer