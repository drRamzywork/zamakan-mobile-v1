
import React, { useRef } from 'react';

import styles from './index.module.scss'; // Make sure this path is correct
import { Typography } from '@mui/material';
import Link from 'next/link';
import { BackArrow, Location } from '@/assets/svgs';

export default function SliderVerses() {



  return (
    <>

      <section className={styles.swiper_container}
        id='swiperContainer'
        dir='rtl'>

        <Link href='/poetry' className={styles.box}>

          <div className={styles.tag}>
            <Typography>سقط اللوى</Typography>
            <div className={styles.icon_container}>
              <Location />
            </div>
          </div>

          <div className={styles.desc}>

            <Typography>
              كأن القيان الغر وسط بيوتهم
              نعـــــاج بجــــــو أو رمــــــاح خلالهــــا
            </Typography>

            <div className={styles.icon_container}>
              <BackArrow />
            </div>

          </div>
        </Link>

        <Link href='/poetry' className={styles.box}>

          <div className={styles.tag}>
            <Typography>سقط اللوى</Typography>
            <div className={styles.icon_container}>
              <Location />
            </div>
          </div>

          <div className={styles.desc}>

            <Typography>
              إذا رأيت نيوب الليث بارزةً
              فلا تضننَّ أن اللّيـــث يبتسِمُ
            </Typography>

            <div className={styles.icon_container}>
              <BackArrow />
            </div>

          </div>
        </Link>

        <Link href='/poetry' className={styles.box}>

          <div className={styles.tag}>
            <Typography>سقط اللوى</Typography>
            <div className={styles.icon_container}>
              <Location />
            </div>
          </div>

          <div className={styles.desc}>

            <Typography>
              كأن القيان الغر وسط بيوتهم
              نعـــــاج بجــــــو أو رمــــــاح خلالهــــا
            </Typography>

            <div className={styles.icon_container}>
              <BackArrow />
            </div>

          </div>
        </Link>




      </section >

    </>
  );
}