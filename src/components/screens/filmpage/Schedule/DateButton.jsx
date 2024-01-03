// import { useState } from "react";
// import styles from "./DateButton.module.css";
// export const DateButton = ({ children, ...props }) => {
//   const { seances } = props;
//   const [showSeances, setShowSeances] = useState(false);
//   // const showSeances = () => {
//   //   console.log("seances", seances);
//   //   console.log(seances.map((seance) => seance.time));
//   //   return (clicked = true);
//   // };
//   return (
//     <>
//       <button onClick={() => setShowSeances(!showSeances)}>{children}</button>
//       {showSeances && (
//         <div>
//           {seances.map((seance, index) => (
//             <button key={index}>{seance.time}</button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };
