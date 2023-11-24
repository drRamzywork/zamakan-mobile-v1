import { Container, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import imgs from '../../../assets/constants/imgs'
import { Arrow_down, BackArrow } from '@/assets/svgs'
import { Button } from '@mui/base'
import { motion } from 'framer-motion';
import Link from 'next/link'


const PageHeader = () => {
  const { backgroundCity } = imgs;

  const [showText, setShowText] = useState(false);
  const [height, setHeight] = useState('auto');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [showText]);

  const toggleText = () => {
    if (showText) {
      // Collapse
      setHeight('auto');
      setShowText(false);
    } else {
      // Expand
      setShowText(true);
    }
  };



  return (
    <header id={styles.cities} dir='rtl' className={styles.PoetryIn} >
      <Link href='/' className={styles.back_arrow}>
        <BackArrow />
      </Link>
      <div className={styles.sec_container}>
        <div className={styles.img_container}>
          <div className={styles.img_box}>
            <img src={backgroundCity.src} />
          </div>
        </div>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className={styles.text_container}>
            <div className={styles.title}>
              <Typography variant='h3'>وَجْرَة</Typography>

              <Typography >صحراء</Typography>

            </div>

            <div
              className={styles.desc} >
              <Typography >وتسمى اليوم ركبه</Typography>
              <Typography
                animate={showText ? { width: "100%" } : { width: "initial" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

                className={styles.desc} sx={showText === false && {
                  overflow: 'hidden !important',
                  display: '-webkit-box',
                  paddingBottom: '0 !important',
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': 2,
                  'white-space': 'pre-wrap',
                  '-webkit-line-clamp': { xs: '2', sm: '2', md: '5', lg: '5', xlg: '5' }

                }}>صحراء واسعةٌ ومستوية، تقع في الطرفِ الشَّمالي من سَهل رُكبة في شمال الطائف، فيها أشجارٌ ومياه وأماكن للرعي، وكانت تشتهرُ بكثرة ظِبائها، ولم يعُد <br /> اسم وَجْرة معروفاً اليوم، فقد دخل في المسمَّى العام لسهل رُكبة.</Typography>

            </div>
            <div className={styles.more_btn}>
              <Button onClick={toggleText}>
                {showText === true ?
                  'اقرأ أقل '

                  :

                  'اقرأ المزيد '

                }

              </Button>
              <div className={`${styles.icon_container} ${showText === true && styles.active}`}>
                <Arrow_down />
              </div>
            </div>
          </motion.div>
        </Container>
      </div >
    </header >
  )
}

export default PageHeader