import { Box, Container, Grid, Typography, Avatar, Tab, Tabs, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import SliderVerses from "../../components/PoetDetails/SliderVerses";
import imgs from '@/assets/constants/imgs'
import Feather from '@/assets/svgs/Feather'
import Profile from '@/assets/svgs/Profile'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { styled } from '@mui/system';
import { motion } from 'framer-motion'
import { SecIcon, BackArrow } from '@/assets/svgs';
import localFont from 'next/font/local'
import { Arrow_down } from '@/assets/svgs'
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
export default function Poet() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const { ra3y, poetCircleImg, Farazdaq } = imgs;
  const collapsedMaxHeight = '100px';

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [age, setAge] = useState('all_ages');
  const [city, setCity] = useState('all_cities');

  const handleChange = (event) => {
    setAge(event.target.value);
    setCity(event.target.value)
  };

  const selectBoxStyles = {
    m: 1,
    minWidth: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '10px 16px',
    width: '199px',
    height: '47px',
    borderRadius: '30px',
    marginRight: '0 !important',
    '@media (max-width: 600px)': {
      width: '140px',
      marginTop: '0',
      padding: '10px',
      paddingRight: '26px',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2', // or any other color you want
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2', // or any other color you want
    },


    '.MuiSelect-select': {
      display: 'flex',
      flexDirection: 'row-reverse',
      outline: 'none !important',
      justifyContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0px',
      width: '167px',
      height: '27px',
      paddingRight: '0px !important',


    },
    '#demo-select-small': {
      color: 'var(--main-blue-color)',
      fontFamily: 'var(--effra-font)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
    },


  }

  const CustomArrowIcon = styled(MdOutlineKeyboardArrowDown)({
    width: '25px',
    height: '25px',
    right: '82% !important',
    top: '19% !important',
    color: ' #11292F',
  });

  // Animation
  const variants = {
    enter: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,

      }
    },
    center: {
      zIndex: 1,
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,

      }
    }
  };





  return (
    <>
      <header className={styles.header}>
        <div className={styles.icon_contain}>
          <SecIcon />
        </div>

        <Link href='/city' className={styles.back_arrow}>
          <BackArrow />
        </Link>
      </header>

      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className={styles.poetDetails} style={{ Effra }}>
        <Grid container className={styles.profileSection}>
          <Grid item className={styles.poet_container}>
            <div className={styles.box_container}>
              <Avatar src={Farazdaq.src} className={styles.avatar} />
              <div className={styles.img_container}>
                <img src={poetCircleImg.src} alt="" />
              </div>
            </div>
            <div className={styles.text_container}>




              <div className={styles.tags_container}>
                <Typography variant="h3" className={styles.profileName}>
                  الأعشى
                </Typography>
                <div className={styles.tag}>
                  <Typography>صَنَّاجة العرب</Typography>
                </div>
              </div>

              <motion.div className={styles.desc} dir='rtl'
                initial={false}
                animate={{ maxHeight: isExpanded ? '400px' : collapsedMaxHeight }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Typography>
                  ميمون بن قيس
                </Typography>
                <Typography>
                  شاعر عظيم من أصحاب المعلقات، كان غزير الشعر، وفد إلى الملوك مادحاً، وكان أول المتكسبين بالشعر ، غنَّى شعرَه، وعمي في آخر حياته، توفي سنة 7ه/629م.
                </Typography>

                {isExpanded &&
                  <Typography>
                    ميمون بن قيس، من بني بكر، لُقِّب بالأعشى لضعف بصره، وُلِدَ في نجد بقرية المنفوحة في اليمامة، وعاش فيها، وكان كثير الوفود على ملوك العرب والفرس، وكثُرت في شعره الألفاظ الفارسية، كان من أغزر الشعراء شِعرًا، ولا يُعرف قبله من هو أكثر منه شِعرًا، ولا من تكسب بشعره قبله، يجيد جميع أنواع الشعر، اشتهر بغنائه لشعره، فسموه: صَنَّاجة العرب (والصناجة صفيحتان من النحاس يضرب بهما للطرب) ، أدرك الإسلام ولم يدخل فيه، فقد خرج يريد مدح النبي صلى الله عليه وسلم فاعترضه بعض المشركين وحذروه من أن رسول الله يمنع الخمر وأعطوه مائة ناقة ليرجع فقال أرجع وأرتوي سنة من الخمر ثم أعود فأسلم فمات في تلك السنة، عاش طويلًا، وأصيب بالعمى في آخر حياته، ومات في المنفوحة سنة 7ه/629م.
                  </Typography>

                }
              </motion.div>
              <div className={styles.more_btn}>
                <button onClick={toggleExpansion}>
                  {isExpanded ? 'اقرأ أقل' : 'اقرأ المزيد'}
                </button>

                <div className={`${styles.icon_container} ${isExpanded === true && styles.active}`}>
                  <Arrow_down />
                </div>
              </div>
            </div>

          </Grid>

        </Grid>
        <Paper square className={styles.tabsSection} dir={'rtl'}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'unset',
              '.MuiAvatar-root': {
                marginLeft: '10px'
              }
            }}
          >
            <Tab
              icon={<div className={styles.iconWrapper}>
                <Profile />
              </div>} label="عن الشاعر"
              id='about'
            />

            <Tab
              id='poets-btn'
              disableRipple
              disableFocusRipple
              icon={<div className={styles.iconWrapper}>
                <Feather />
              </div>} label="أبيات ذكرها في المملكة" />

          </Tabs>
          {selectedTab === 0 && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              className={styles.tabContent_container} dir='rtl'>
              <section className={styles.timelineSection}>
                <div className={styles.boxes_container}>

                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography >اللقب وسببه </Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>الأعشى لضعف بصره </Typography>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>العصر</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>قبل الإسلام</Typography>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>محل الميلاد</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>اليمامة في نجد وخصوصاً (منفوحة)</Typography>
                    </div>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>تاريخ الوفاة</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>7هـ/629م</Typography>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>محل الميلاد</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>المدينة المنورة</Typography>
                    </div>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>تاريخ الوفاة</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>105 هـجريًا - 723 ميلاديًا</Typography>
                    </div>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>محل الوفاة</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>المدينة المنورة</Typography>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography>عمره عند الوفاة</Typography>
                    </div>
                    <div className={styles.name}>
                      <Typography>79 عام</Typography>
                    </div>
                  </div>

                </div>
              </section>



            </motion.div>
          )}
          {selectedTab === 1 && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              dir='rtl'>
              <section className={styles.timelineSection}>

                <SliderVerses />
              </section>



            </motion.div>
          )}

        </Paper>
      </Container>


    </>

  );
}