import { Container, Typography, } from '@mui/material'
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { imgs } from '@/assets/constants'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
const Verses = () => {
  const { ra3y } = imgs;

  const responsive = {
    superLargeDesktopp: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktopp: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    superLargeDesktop2: {
      breakpoint: { max: 1400, min: 1000 },
      items: 2,
    },
    superLargeDesktop2: {
      breakpoint: { max: 1000, min: 900 },
      items: 2.7,
    },
    superLargeDesktop: {
      breakpoint: { max: 900, min: 548 },
      items: 2.1,
    },
    desktop: {
      breakpoint: { max: 548, min: 460 },
      items: 1.8,
    },
    tablet: {
      breakpoint: { max: 460, min: 400 },
      items: 1.5,
      partialVisibilityGutter: 16

    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1.5,
      partialVisibilityGutter: 16
    },
    mobile_small: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
      partialVisibilityGutter: 16
    },
  };


  return (
    <>
      <section id='Verses' className={styles.Verses} dir='rtl' >
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

            <div className={styles.info_sec}>


              <div className={styles.boxes_bref}>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>موقعه</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>الجزء الغربي من نجد</Typography>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>المنطقة الإدارية</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>الرياض</Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصفه</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>جبل يميل لونه إلى السواد يقع أرض صحراوية</Typography>
                  </div>
                </div>


              </div>
              <div className={styles.boxes_container}>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصف المكان قديمًا</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>جبل يقع في أرض صحراوية مستوية وواسعة المساحة.</Typography>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصف المكان حديثًا</Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>جبل يقع في أرض صحراوية مستوية وواسعة المساحة.</Typography>
                  </div>
                </div>



              </div>
            </div>
          </Container>



          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container_mobile'>

            <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
              <div className={styles.sec_title}>
                <Typography variant='h3'>أبيات قيلت في وَجْرَة</Typography>
              </div>
            </Container>
            <div className={styles.slider_sec}>
              <Carousel
                draggable
                responsive={responsive}
                rtl={true}
                ssr={true}
                showDots={false}
                renderDotsOutside={false}
                containerClass="carousel-container"
                minimumTouchDrag={10}
                arrows={false}
              >
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>

                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_container}>
                    <Link href='/poet' className={styles.info}>
                      <div className={styles.img_container}>
                        <img src={ra3y.src} alt="ra3y" />
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.name}>
                          <Typography>امرؤ القيس</Typography>
                        </div>
                        <div className={styles.type}>
                          <Typography>العصر الأموي</Typography>
                        </div>
                      </div>
                    </Link>

                    <div className={styles.desc}>
                      <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                    </div>
                    <div className={styles.said}>
                      <div className={styles.title}>
                        <Typography>يقول</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                          بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>


          </Container>

        </div >
      </section >

    </>
  )
}

export default Verses