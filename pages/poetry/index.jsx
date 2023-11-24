import { BackArrow, NavTabs } from '@/assets/svgs'
import { Container, Typography } from '@mui/material'
import React from 'react'
import imgs from '@/assets/constants/imgs'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import styles from './index.module.scss'
import localFont from 'next/font/local'
import Link from 'next/link';

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

const Poetry = () => {
  const { ra3y, poetCircleImg, Farazdaq } = imgs;

  return (
    <>
      <header className={styles.poetry_details}>
        <div className={styles.icon_container}>
          <BackArrow />
        </div>
      </header>
      <section dir='rtl' id='poetry_details' className={styles.poetry_details} style={{ Effra }}>
        <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            <SwiperSlide>
              <div className={styles.title} >
                <Typography >
                  قول امرؤ القيس في  <span>وَجْرَة</span>
                </Typography>
              </div>

              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <NavTabs />
                </div>

                <div className={styles.box_desc}>
                  <Typography>
                    تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي
                    <br />
                    بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ
                  </Typography>
                </div>
              </div>

              <div className={styles.desc}>
                <Typography>
                  ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة.
                </Typography>
              </div>


              <Link href='/poet' className={styles.poet_info}>
                <div className={styles.img_container}>
                  <img src={Farazdaq.src} alt="" />
                </div>
                <div className={styles.poet_name}>
                  <Typography> امرؤ القيس</Typography>
                </div>
                <div className={styles.icon_container}>
                  <BackArrow />
                </div>
              </Link>


            </SwiperSlide>


            <SwiperSlide>
              <div className={styles.title} >
                <Typography >
                  قول امرؤ القيس في  <span>وَجْرَة</span>
                </Typography>
              </div>

              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <NavTabs />
                </div>

                <div className={styles.box_desc}>
                  <Typography>
                    تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي
                    <br />
                    بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ
                  </Typography>
                </div>
              </div>

              <div className={styles.desc}>
                <Typography>
                  ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة.
                </Typography>
              </div>


              <Link href='/poet' className={styles.poet_info}>
                <div className={styles.img_container}>
                  <img src={Farazdaq.src} alt="" />
                </div>
                <div className={styles.poet_name}>
                  <Typography> امرؤ القيس</Typography>
                </div>
                <div className={styles.icon_container}>
                  <BackArrow />
                </div>
              </Link>


            </SwiperSlide>


            <SwiperSlide>
              <div className={styles.title} >
                <Typography >
                  قول امرؤ القيس في  <span>وَجْرَة</span>
                </Typography>
              </div>

              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <NavTabs />
                </div>

                <div className={styles.box_desc}>
                  <Typography>
                    تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي
                    <br />
                    بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ
                  </Typography>
                </div>
              </div>

              <div className={styles.desc}>
                <Typography>
                  ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة.
                </Typography>
              </div>


              <Link href='/poet' className={styles.poet_info}>
                <div className={styles.img_container}>
                  <img src={Farazdaq.src} alt="" />
                </div>
                <div className={styles.poet_name}>
                  <Typography> امرؤ القيس</Typography>
                </div>
                <div className={styles.icon_container}>
                  <BackArrow />
                </div>
              </Link>


            </SwiperSlide>


            <SwiperSlide>
              <div className={styles.title} >
                <Typography >
                  قول امرؤ القيس في  <span>وَجْرَة</span>
                </Typography>
              </div>

              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <NavTabs />
                </div>

                <div className={styles.box_desc}>
                  <Typography>
                    تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي
                    <br />
                    بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ
                  </Typography>
                </div>
              </div>

              <div className={styles.desc}>
                <Typography>
                  ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة.
                </Typography>
              </div>


              <Link href='/poet' className={styles.poet_info}>
                <div className={styles.img_container}>
                  <img src={Farazdaq.src} alt="" />
                </div>
                <div className={styles.poet_name}>
                  <Typography> امرؤ القيس</Typography>
                </div>
                <div className={styles.icon_container}>
                  <BackArrow />
                </div>
              </Link>


            </SwiperSlide>




          </Swiper>

          <div className={styles.reasons}>
            <div className={styles.box}>
              <div className={styles.title}>
                <Typography>سبب ذكر الشاعر له</Typography>
              </div>

              <div className={styles.name}>
                <Typography>وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ</Typography>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>
                <Typography>المقصد من البيت</Typography>
              </div>

              <div className={styles.name}>
                <Typography>وصف محبوبته</Typography>
              </div>
            </div>
          </div>
        </Container>


      </section>
    </>
  )
}

export default Poetry