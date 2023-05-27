
import { useState } from 'react';
import './App.css';
import {animated, useSpring} from '@react-spring/web';



function App() {

  // const springs = useSpring({
  //   from: {
  //     x: -500,
  //     opacity: 0,
  //     transition: '0.5s'
  //   },
  //   to: {
  //     x: 0,
  //     opacity: 1,
  //     transition: '0.5s'
  //   }
  // })

  // const [h, setH] = useState(100);

  // const [springs, api] = useSpring(() => ({
  //   from: {
  //     y: h,
  //     background: 'red'
  //   }
  // }))


  // const handleClick = () => {
  //   setH(prev => prev + 100);
  //   api.start({
  //     from: {
  //       y: h -100,
  //       background: 'red'
  //     },
  //     to: {
  //       y: h,
  //       background: 'green'
  //     }
  //   })
  // }

  // console.log(h)

  return (
    <div className="App">
      <h1>React Spring Practice</h1>
      <p>Some text about React spring</p>
      {/* <button onClick={handleClick}></button> */}
      {/* <animated.div
      style={springs}
      >
        Text text text text text text text text
      </animated.div> */}
      {/* <animated.div
      style={{
        width: '50px',
        height: '50px',
        background: 'red',
        ...springs
      }}
      >

      </animated.div> */}
    </div>
  );
}

export default App;
