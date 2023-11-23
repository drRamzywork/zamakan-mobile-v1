import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import imgs from '../../assets/constants/imgs';
import Svg from '../SVGParts/Svg';
import { useRouter } from 'next/router';
import "react-multi-carousel/lib/styles.css";
import { useMapContext } from '@/context/MapContext';
import styles from './index.module.scss'
import { Container } from '@mui/material';
const SaudiMap = ({ }) => {
  const { landElments,
    setActiveIndex,
    setActiveLand,
    transformComponentRef,
    seIsPointsActive,
  } = useMapContext();




  const stateObj = {
    positionX: 0,
    positionY: 0,
    previousScale: 1,
    scale: 0.8,

  }
  return (
    <>

      <Container>


        <div className={styles.map_boxes} id='map-boxes'>
          <TransformWrapper
            ref={transformComponentRef}
            wheel={{ wheelDisabled: true }}
            zoomIn={{ step: 100 }}
            zoomOut={{ step: 100 }}
            minScale={0.5}
            maxScale={1.5}
            initialScale={1}
            wrapperStyle={{ maxWidth: '100%', maxHeight: 'calc(100vh - 50px)' }}
            doubleClick={{ disabled: false, mode: "reset" }}
          >


            {({ zoomIn, zoomOut, resetTransform }) => (

              <>
                <div className={"tools"}>
                  <button onClick={() => zoomIn()}>+</button>
                  <button onClick={() => zoomOut()}>-</button>
                  <button onClick={() => {
                    resetTransform();
                    setActiveIndex(null);
                    setActiveLand(null);
                    seIsPointsActive(false);

                    landElments.forEach((element) => {
                      element.classList.remove('activeLand', 'hiddenPoints');
                    });
                  }}>Reset</button>





                </div>

                <TransformComponent>
                  <Svg />
                </TransformComponent>
              </>
            )
            }
          </TransformWrapper >



        </div >
      </Container>

    </>


  )
}

export default SaudiMap