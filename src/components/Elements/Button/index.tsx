import React from "react";

interface Props {
  title: string,
  variant: string,
}

export default function Button(props) {
  const { variant = 'bg-blue-300', children = "..." } = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
      {children}
    </button>
  );
}


// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//         Buy now
//       </button>
//     )
//   }
// }