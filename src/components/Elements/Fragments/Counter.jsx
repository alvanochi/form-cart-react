// import React, { useEffect, useRef } from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     this.setState({ count: (this.state.count = 1) });
//   }

//   componentDidUpdate() {
//     if (this.state.count === 11) {
//       this.setState({ count: 1 });
//     }
//   }

//   render() {
//     return (
//       <div className="flex items-center justify-center py-3">
//         <button
//           ref={buttonRef}
//           className="px-3 py-1 font-bold text-black outline-blue-500 outline outline-2 rounded-xl"
//           onClick={() => this.setState({ count: this.state.count - 1 })}
//         >
//           {"<"}
//         </button>
//         <h1 className="mx-3 ">{this.state.count}</h1>
// <button
//   className="px-3 py-1 font-bold text-black outline-blue-500 outline outline-2 rounded-xl"
//   onClick={() => this.setState({ count: this.state.count + 1 })}
// >
//   {">"}
// </button>
//       </div>
//     );
//   }
// }
// const buttonRef = useRef(null);
// useEffect(() => {
//   if (this.state.count > 1) {
//     buttonRef.current.style.display = "none";
//   }
// }, []);
// export default Counter;

import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const buttonRef = useRef(null);
  useEffect(() => {
    count > 1
      ? (buttonRef.current.style.display = "block")
      : (buttonRef.current.style.display = "none");
  });

  return (
    <div className="flex items-center justify-center py-3">
      <button
        ref={buttonRef}
        onClick={() => setCount(count - 1)}
        className="px-3 py-1 font-bold text-black outline-blue-500 outline outline-2 rounded-xl"
      >
        {"<"}
      </button>
      <h1 className="flex items-center mx-4">{count}</h1>
      <button
        className="px-3 py-1 font-bold text-black outline-blue-500 outline outline-2 rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Counter;
