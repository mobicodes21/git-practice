// import { useEffect, useRef, useState } from "react";
// import { UserProvider } from "./context/UserContext";
// import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Counter from "./app/features/Counter";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import User from "./components/User";
import { store } from "./app/store";

function App() {

  // const countRef = useRef(0);

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     countRef.current +=1;
  //     console.log(countRef.current);
  //   }, 1000)

  //   return()=>{
  //     clearInterval(interval)
  //   }
  // },[])
  // const inputRef = useRef(null);

  // const handleFocus = ()=>{
  //   inputRef.current.focus();
  // }
  // const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   const timer = setInterval(() => {
  //     console.log('Tick...');
  //   }, 1000);

  //   return()=>{
  //     clearInterval(timer)
  //   }
  // }, [])
  return (
    // <>
    // {/* <UserProvider>
    //   <Profile/>
    // </UserProvider> */}
    // {/* <p>{countRef.current}</p> */}
    // {/* <input ref={inputRef}/>
    // <button onClick={handleFocus}>focus</button> */}
    // {/* <p>{count}</p>
    // <button onClick={()=>setCount(count+1)}>increase</button> */}
    // </>

    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="about" element={<About/>}/>
    //   <Route path="user/:id" element={<User/>}/>
    //   </Routes>
    // </BrowserRouter>
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
