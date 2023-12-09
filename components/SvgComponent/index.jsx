import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SvgComponent = ({ dataAllCitiesMap, isSafari }) => {
  const d3Container = useRef(null);

  // useEffect(() => {
  //   if (d3Container.current) {
  //     const svg = d3.select(d3Container.current);

  //     // Initialize D3 zoom
  //     const zoom = d3.zoom().scaleExtent([1, 8]);

  //     // Select the SVG element and call the zoom behavior
  //     svg.call(zoom);

  //     // Create a group for the map elements
  //     const mapGroup = svg.append('g').attr('class', 'map-group');

  //     // Render map elements (regions)
  //     mapGroup
  //       .selectAll('.land')
  //       .data(dataAllCitiesMap)
  //       .enter()
  //       .append('g')
  //       .attr('class', 'land')
  //       .attr('id', (d) => d.svgPathId)
  //       .each(function (d) {
  //         // Render paths for each land
  //         const svgPath = d3.select(this).append('g');
  //         svgPath.html(d.svgPath); // Insert the SVG string directly into the DOM

  //         // Render foreign objects for each place within the land
  //         d3.select(this)
  //           .selectAll('.place')
  //           .data(d.places)
  //           .enter()
  //           .append('foreignObject')
  //           .attr('x', (place) => place.svgX)
  //           .attr('y', (place) => place.svgY)
  //           .attr('width', '100')
  //           .attr('height', '100')
  //           .attr('id', (place) => place.id)
  //           .html((place) => {
  //             return `
  //             <div class="city-container" xmlns="http://www.w3.org/1999/xhtml">
  //               <div>
  //                 <div>
  //                   <p>${place.name}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           `;
  //           });
  //       });

  //     // Set up click event for each land
  //     mapGroup.selectAll('.land').on('click', function (event, d) {
  //       event.stopPropagation();

  //       // Reset the stroke for all lands
  //       mapGroup.selectAll('.land').attr('stroke', null);

  //       // Apply red stroke to the clicked land
  //       d3.select(this).attr('stroke', 'red');
  //     });
  //   }
  // }, [dataAllCitiesMap]);
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Initialize D3 zoom
      const zoom = d3.zoom().scaleExtent([1, 8]);

      // Select the SVG element and call the zoom behavior
      svg.call(zoom);

      // Create a group for the map elements
      const mapGroup = svg.append('g').attr('class', 'map-group');

      // Render map elements (regions)
      mapGroup
        .selectAll('.land')
        .data(dataAllCitiesMap)
        .enter()
        .append('g')
        .attr('class', 'land')
        .attr('id', (d) => d.svgPathId)
        .each(function (d) {
          // Render paths for each land
          const svgPath = d3.select(this).append('g');
          svgPath.html(d.svgPath); // Insert the SVG string directly into the DOM

          // Render foreign objects for each place within the land
          d3.select(this)
            .selectAll('.place')
            .data(d.places)
            .enter()
            .append('foreignObject')
            .attr('x', (place) => place.svgX)
            .attr('y', (place) => place.svgY)
            .attr('width', '100')
            .attr('height', '100')
            .attr('id', (place) => place.id)
            .html((place) => {
              return `
              <div class="city-container" xmlns="http://www.w3.org/1999/xhtml">
                <div>
                  <div>
                    <p>${place.name}</p>
                  </div>
                </div>
              </div>
            `;
            });
        });

      // Set up click event for each land
      mapGroup.selectAll('.land').on('click', function (event, d) {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();

        // Reset the stroke for all lands
        mapGroup.selectAll('.land').attr('stroke', null);

        // Apply red stroke to the clicked land
        d3.select(this).attr('stroke', 'red');

        // Get bounding box of the clicked land
        const bbox = this.getBBox();

        // Calculate new transform for zooming to the bounding box
        const scale = 2; // You can adjust this value based on your needs
        const translate = [
          -bbox.x * scale + bbox.width / 2,
          -bbox.y * scale + bbox.height / 2,
        ];


        zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()).invert([bbox.width / 2, bbox.height / 2])


        // Apply new transformation
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(event, svg.node())
        );
      });
    }
  }, [dataAllCitiesMap]);


  return (
    <>
      <svg
        id="svg1"
        width="858"
        height="724"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${isSafari ? 'saudi-map safari' : 'saudi-map'}`}
        viewBox="90 90 758 624"
        ref={d3Container}
      ></svg>
    </>
  );
};

export default SvgComponent;
