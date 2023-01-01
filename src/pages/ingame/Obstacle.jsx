import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import { TrackDocument, Track, TrackedDiv } from "react-track/lib";
import {
    topTop,
    topBottom,
    centerCenter,
    topCenter,
    bottomBottom,
    bottomTop,
    getDocumentRect,
    getDocumentElement,
    calculateScrollY
} from 'react-track/tracking-formulas';


// function Obstacle() {
//     const obsRef = useRef();
//     // const [pos1, SetPos2] = useState(0);
//     // useEffect(() => {
//     //     SetPos2(getDocumentRect);
//     // })
//     // // 
//     // function getOffset() {
//     //     const rect = obsRef.getBoundingClientRect();
//     //     return {
//     //         left: rect.left + window.scrollX,
//     //         top: rect.top + window.scrollY
//     //     };
//     // }

//     // obsRef = el => {
//     //     console.log(el.getBoundingClientRect());
//     // };
//     return (<>
//         <Box
//             id="block"
//             // ref={this.obsRef}
//         >
//             {/* {getOffset().left} */}
//             {/* <TrackDocument formulas={[getDocumentRect]}>
//                 {rect =>
//                     <Box color='white'>
//                         right {rect.width}
//                         left {rect.right}
//                     </Box>}
//             </TrackDocument> */}
//         </Box>
//     </>);
// }


const Obstacle = () => {
  const myContainer = useRef(null);
  
  useEffect(() => {
    console.log("myContainer..", myContainer.current);
  });

  return (
    <Box
    id="block"
    >
      <h1>Ref with react</h1>
      <div ref={myContainer}>I can use the DOM with react ref</div>
    </Box>
  );
};


export default Obstacle;