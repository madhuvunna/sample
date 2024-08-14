import './App.css';
//import { useState } from 'react';
// import TodoApp from './Components/TodoApp';
// import Counter from './Components/Counter';
// import Form from './Components/Form';
//import Modal from './Components/Modal';
// import { CounterProvider } from './Components/CounterContext';
// import CounterControls from './Components/CounterControls';
// import CounterDisply from './Components/CounterDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthProvider} from './AuthContext';
import Dashboard from './Chandu/Dashboard';
import Home from './Chandu/Home';
import Login from './Chandu/Login';
 function App() 
 {
  // const [showModal,setShowModal] = useState(false);

  // const openModal = () =>{
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
          //  <CounterProvider>
          
    <div className="App">
      {/* <h1>Modal popup Example</h1>
      <button onClick={openModal} style={{padding : '10px 20px '}}>openModal</button>
      <Modal show ={showModal} handleclose ={closeModal}>
        <h2>Modal Header</h2>
        <p>This is the model content.</p>
        </Modal> */}
      {/* <TodoApp/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </AuthProvider>
        </Router>
      {/* <CounterDisply/>
      <CounterControls/> */}
     
    </div>
    // </CounterProvider>

  );
}


export default App;

// import './App.css';
// import React,{useState} from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import ContactPage from './Components/ContactPage';
// import Modal from './Components/Modal';

// function App(){
//   const[showModal,setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   }

//   const closeModal = () => {
//     setShowModal(false);
//   };

//    return(
//     <Router>
//           <div className="App">
//             <nav>
//               <ul>
//                 <li><Link to ="/">Home</Link></li>
//                 <li><Link to ="/about">About</Link></li>
//                 <li><Link to ="/contactpage">ContactPage</Link></li>
//               </ul>
//             </nav>
//                 <button onClick={openModal} style={{padding:'10px 20px'}}>Open Modal</button>
//                 <Modal show ={showModal} handleClose ={closeModal}>
//                   <h2>Modal Header</h2>
//                   <p>This is the modal content.</p>
//                 </Modal>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contactpage" element={<ContactPage />} />
//                 </Routes>

//           </div>
//     </Router>
//    );
// }
//  export default App;