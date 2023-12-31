import React from "react";

interface Props {
  title: string,
  classname: string,
}

function Button(props) {
  const { classname = 'bg-blue-300', children = "...", onClick = () => {}, type = "button" } = props
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button



// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//         Buy now
//       </button>
//     )
//   }
// }