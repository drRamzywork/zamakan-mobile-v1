import { Container, Typography, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import imgs from '../../assets/constants/imgs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Svg from '@/components/SVGParts/Svg';
import Link from 'next/link'
import { Button } from '@mui/base'
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import * as d3 from 'd3';
import { geoPath } from 'd3-geo';
import { zoom } from 'd3-zoom';
import { feature, mesh } from 'topojson-client'; // Assuming you have the necessary topojson data



const Places = ({ dataAllCitiesMap,
  dataAllPlacesMap }) => {
  const {
    ra3y,
    saudiAllPieces,
    mapPiece1,
    mapPiece2,
    mapPiece3,
    mapPiece4,
    mapPiece5,
    mapPiece6,
    mapPiece7,

  } = imgs


  const landData = [
    { name: 'الرياض', image: mapPiece1 },
    { name: 'مكة المكرمة', image: mapPiece2 },
    { name: 'المدينة المنورة', image: mapPiece3 },
    { name: 'الشرقية', image: mapPiece4 },
    { name: 'القصيم', image: mapPiece5 },
    { name: 'عسير', image: mapPiece6 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
    { name: 'حائل', image: mapPiece7 },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);
  const [isPointsActive, seIsPointsActive] = useState(false);



  const transformComponentRef = useRef(null);

  const resetTransformRef = useRef(null);


  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

    if (activeLand) {
      activeLand.classList.remove('activeLand');
      seIsPointsActive(false)
    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add('activeLand');
      seIsPointsActive(true)
    }

    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.add('hiddenPoints');
      });
    } else {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.remove('hiddenPoints');
      });

    }

  }, [activeIndex, activeLand])

  // const handleZoomToLand = (landIndex) => {
  //   const elementId = `land-${landIndex}`;
  //   if (transformComponentRef.current) {
  //     const { zoomToElement } = transformComponentRef.current;
  //     zoomToElement(elementId);
  //   }
  //   setActiveIndex(landIndex); // Set the active index
  //   seIsPointsActive(false);
  // };


  const [cityData, setCityData] = useState(null)
  const [poetriesData, setPoetriesData] = useState(null)
  const [isSafari, setIsSafari] = useState(false);
  const [activeCity, setActiveCity] = useState(null);

  useEffect(() => {
    // Detect Safari browser
    setIsSafari(navigator.vendor.includes("Apple"));

  }, []);


  const convertSVGPathsToJSX = (svgString) => {
    const paths = svgString.split("</path>");
    return paths.map((path, index) => (
      <g key={index} dangerouslySetInnerHTML={{ __html: path + "</path>" }} />
    ));
  };

  const handlePlaceWindow = async (placeId) => {
    setActiveCity(placeId);

    try {
      const response = await fetch(`/api/fetchCityData?placeId=${placeId}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const { cityData, poetryData } = await response.json();

      setPoetriesData(poetryData);
      setCityData(cityData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };


  // 
  const d3Container = useRef(null);

  // useEffect(() => {
  //   if (d3Container.current) {
  //     const svg = d3.select(d3Container.current);
  //     console.log(svg, "G ELements")

  //     const zoomBehavior = d3.zoom()
  //       .scaleExtent([1.2, 8])
  //       .on('zoom', (event) => {
  //         svg.selectAll('g').attr('transform', event.transform);
  //       });

  //     svg.call(zoomBehavior).on("dblclick.zoom", null);
  //   }
  // }, []);

  // useEffect(() => {

  //   if (d3Container.current && dataAllCitiesMap) {
  //     const width = 975;
  //     const height = 610;

  //     const svg = d3.select(d3Container.current);
  //     svg.attr("viewBox", [0, 0, width, height])
  //       .attr("width", width)
  //       .attr("height", height)
  //       .attr("style", "max-width: 100%; height: auto;");

  //     const g = svg.append("g");
  //     const path = geoPath();

  //     const zoomBehavior = zoom()
  //       .scaleExtent([1, 8])
  //       .on("zoom", zoomed);

  //     const states = g.append("g")
  //       .attr("fill", "#444")
  //       .attr("cursor", "pointer")
  //       .selectAll("path")
  //       // .data(feature(dataAllCitiesMap, dataAllCitiesMap.svgPath).features)
  //       .join("path")
  //       .on("click", clicked)
  //       .attr("d", path);

  //     states.append("title")
  //       .text(d => d.properties.name);
  //     console.log(states, "states")


  //     svg.call(zoomBehavior);
  //     function clicked(event, d) {
  //       // Clicked functionality
  //     }

  //     function zoomed(event) {
  //       // Zoom functionality
  //     }
  //   }
  // }, []); // Dependency array with your TopoJSON data


  // useEffect(() => {
  //   if (d3Container.current) {
  //     const svg = d3.select(d3Container.current);
  //     const g = document.querySelectorAll('g');
  //     const zoomBehavior = d3.zoom()
  //       .scaleExtent([1.2, 8])
  //       .on('zoom', (event) => g.attr('transform', event.transform));

  //     // Disable default double-click zoom
  //     svg.call(zoomBehavior).on("dblclick.zoom", null);

  //     // Add custom click event listener
  //     svg.on('click', (event) => {
  //       // Determine the point clicked and the desired zoom scale
  //       const [x, y] = d3.pointer(event);
  //       const scale = 2; // Example scale factor, adjust as needed
  //       const translate = [x, y]; // Example translate, adjust as needed

  //       svg.transition()
  //         .call(zoomBehavior.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
  //     });
  //   }
  // }, []);
  // useEffect(() => {
  //   if (d3Container.current) {
  //     const svg = d3.select(d3Container.current);
  //     const zoomBehavior = d3.zoom()
  //       .scaleExtent([1, 8]);

  //     svg.call(zoomBehavior).on("dblclick.zoom", null);

  //     dataAllCitiesMap?.forEach(land => {
  //       svg.select(`#${land.svgPathId}`).on('click', function (event) {
  //         event.stopPropagation();

  //         const [x, y] = d3.pointer(event);
  //         const scale = 1.2;  // Adjust the scale factor as needed

  //         const g = d3.select(this);
  //         g.transition()
  //           .duration(750)
  //           .attr('transform', ` scale(${scale})`);
  //       });
  //     });

  //     svg.on('click', function () {
  //       svg.selectAll('g.land').transition()
  //         .duration(750)
  //         .attr('transform', '');
  //     });
  //   }
  // }, [dataAllCitiesMap]);

  // $$$$$$$
  useEffect(() => {
    if (d3Container.current) {
      const width = d3Container.current.clientWidth;
      const height = d3Container.current.clientHeight;
      const svg = d3.select(d3Container.current);

      const zoomBehavior = d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", zoomed);

      // Apply the zoom behavior to the SVG
      svg.call(zoomBehavior);

      dataAllCitiesMap?.forEach(land => {
        svg.selectAll(`#${land.svgPathId}`).on('click', function (event, d) {
          event.stopPropagation();
          // Calculate the centroid of the clicked element
          const centroid = d3.select(this).node().getBBox();
          const centerX = centroid.x + centroid.width / 2;
          const centerY = centroid.y + centroid.height / 2;
          const scale = 1.8; // Adjust scale factor as needed

          // Create a transform that translates to the centroid and scales
          const transform = d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(scale)
            .translate(-centerX, -centerY);

          svg.transition()
            .duration(750)
            .call(zoomBehavior.transform, transform);
        });
      });

      function zoomed(event) {
        svg.selectAll('.land').attr('transform', event.transform);
      }




      function reset() {
        svg.transition()
          .duration(750)
          .call(zoomBehavior.transform, d3.zoomIdentity);
      }

      svg.on('click', reset);
    }
  }, [dataAllCitiesMap]);
  // $$$$$$$

  const handleZoomToLand = (index) => {
    if (dataAllCitiesMap[index]) {
      const width = d3Container.current.clientWidth;
      const height = d3Container.current.clientHeight;
      const svg = d3.select(d3Container.current);
      const zoomBehavior = d3.zoom()
        .scaleExtent([1, 8])
        .on('zoom', zoomed);

      // Clear previous click event listeners
      svg.call(zoomBehavior);


      svg.select(`#${dataAllCitiesMap[index].svgPathId}`).on('click', function (event, d) {
        event.stopPropagation();
        // Calculate the centroid of the clicked element
        const centroid = d3.select(this).node().getBBox();
        const centerX = centroid.x + centroid.width / 2;
        const centerY = centroid.y + centroid.height / 2;
        const scale = 1.8; // Adjust scale factor as needed

        // Create a transform that translates to the centroid and scales
        const transform = d3.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(scale)
          .translate(-centerX, -centerY);

        svg.transition()
          .duration(750)
          .call(zoomBehavior.transform, transform);
      });
      function zoomed(event) {
        svg.selectAll('.land').attr('transform', event.transform);
      }

    }
  };








  return (

    <>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
        < section id='Places' className={styles.Places} dir='rtl'>
          <div className={styles.sec_container}>

            <div className={styles.slider_container}>
              <Swiper
                dir="rtl"
                breakpoints={{
                  300: {
                    slidesPerView: 4,
                    spaceBetween: 14,
                  },
                  400: {
                    slidesPerView: 4,
                    spaceBetween: 14,
                  },
                  640: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 9.1,
                    spaceBetween: 40,

                  },
                }}

                pagination={true} className="mySwiper">

                {dataAllCitiesMap?.map((city, index) =>
                  <SwiperSlide key={index}>
                    <div
                      className={`${styles.slider} 
                     ${index === activeIndex ? styles.active : ''}`}
                      key={index} onClick={() => handleZoomToLand(index)}
                    >
                      <div className={styles.name}>
                        <Typography>{city.name}</Typography>
                      </div>
                    </div>

                  </SwiperSlide >
                )}

              </Swiper>
            </div>
            <div className={styles.map_container}>
              <div className={styles.map} dir='ltr'>


                <xml version="1.0" encoding="UTF-8" standalone="no" />
                <svg
                  id="svg1"
                  width="858"
                  height="724"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${isSafari ? "saudi-map safari" : "saudi-map"}`}
                  viewBox="90 90 758 624"
                  ref={d3Container}
                >

                  {dataAllCitiesMap?.map((land, index) => (
                    <g className="land" key={index} id={land.svgPathId} >
                      {convertSVGPathsToJSX(land.svgPath)}
                      {/* {land.places.map((place, index) =>
                        <foreignObject x={place.svgX} y={place.svgY} width="100" height="100" id="1" key={place.id}>
                          <div className="city-container" xmlns="http://www.w3.org/1999/xhtml">
                            <div

                              className={`city-name ${activeCity === place.id ? 'active' : ''}`} id="p1">

                              <div>
                                <p>{place.name}</p>
                                <svg
                                  width="15"
                                  height="6"
                                  viewBox="0 0 15 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.956299 0.882812H14.8405H12.9973C11.8578 0.882812 10.8162 1.52659 10.3066 2.54573L9.14027 4.87844C8.6286 5.90177 7.16825 5.90178 6.65658 4.87844L5.49023 2.54573C4.98065 1.52659 3.939 0.882812 2.79956 0.882812H0.956299Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </foreignObject>
                      )} */}

                    </g>

                  ))}
                </svg>

              </div >


            </div>
          </div>
        </section >
      </Container>

    </>

  )
}

export default Places


export async function getServerSideProps() {

  const resAllCitiesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=13&lang=2&withPlaces=true&pagenum=1&pagesize=50  `);
  const dataAllCitiesMap = await resAllCitiesMap.json();


  const resAllPlacesMap = await fetch(`https://api4z.suwa.io/api/Makan/GetAllCities?type=13&lang=2&withPlaces=true&pagenum=1&pagesize=50  `);
  const dataAllPlacesMap = await resAllPlacesMap.json();



  return {
    props: {
      dataAllCitiesMap: dataAllCitiesMap,
      dataAllPlacesMap: dataAllPlacesMap
    },
  };
}