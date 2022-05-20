// import { keyboardState } from "../../../../commons/store";
// import { useEffect } from "react";

// // 스페이스바 제외 색상 바뀐거 찾는 함수 & 변수
// export let length = 0;
// export let spacebarLength = 0;
// export let enterLength = 0;
// export let escLength = 0;

// export const ChangeKey = () => {
//   useEffect(() => {
//     if (
//       Object.values(keyboardState.items)[14] !== "#ffffff" ||
//       Object.values(keyboardState.items)[33] !== "#ffffff" ||
//       Object.values(keyboardState.items)[47] !== "#ffffff"
//     ) {
//       if (
//         Object.values(keyboardState.items)[14] !== "#ffffff" &&
//         Object.values(keyboardState.items)[33] !== "#ffffff" &&
//         Object.values(keyboardState.items)[47] !== "#ffffff"
//       ) {
//         length =
//           Object.values(keyboardState.items).filter((el) => el !== "#ffffff")
//             .length - 3;
//       } else if (
//         Object.values(keyboardState.items)[14] !== "#ffffff" &&
//         Object.values(keyboardState.items)[33] !== "#ffffff"
//       ) {
//         length =
//           Object.values(keyboardState.items).filter((el) => el !== "#ffffff")
//             .length - 2;
//       } else if (
//         Object.values(keyboardState.items)[33] !== "#ffffff" &&
//         Object.values(keyboardState.items)[47] !== "#ffffff"
//       ) {
//         length =
//           Object.values(keyboardState.items).filter((el) => el !== "#ffffff")
//             .length - 2;
//       } else if (
//         Object.values(keyboardState.items)[14] !== "#ffffff" &&
//         Object.values(keyboardState.items)[47] !== "#ffffff"
//       ) {
//         length =
//           Object.values(keyboardState.items).filter((el) => el !== "#ffffff")
//             .length - 2;
//       } else {
//         length =
//           Object.values(keyboardState.items).filter((el) => el !== "#ffffff")
//             .length - 1;
//       }
//     } else {
//       length = Object.values(keyboardState.items).filter(
//         (el) => el !== "#ffffff"
//       ).length;
//     }
//   });

//   return <div>{length}</div>;
// };

// // 스페이스바 색상 바꼈을 때
// export function SpaceBarChangeKey() {
//   useEffect(() => {
//     spacebarLength =
//       Object.values(keyboardState.items)[33] !== "#ffffff" ? 1 : 0;
//   });

//   return <div>{spacebarLength}</div>;
// }

// export function EnterChangeKey() {
//   useEffect(() => {
//     enterLength = Object.values(keyboardState.items)[14] !== "#ffffff" ? 1 : 0;
//   });

//   return <div>{enterLength}</div>;
// }

// // esc 색상 바꼈을 때
// export function EscChangeKey() {
//   useEffect(() => {
//     escLength = Object.values(keyboardState.items)[47] !== "#ffffff" ? 1 : 0;
//   });

//   return <div>{escLength}</div>;
// }
