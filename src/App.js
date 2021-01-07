import React, {useState} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import LeftAside from './components/LeftAside/LeftAside'
import Search from './components/LeftAside/Search';
import RightAside from './components/RightAside/RightAside';

function App() {
  const [toggle, setToggle] = useState(false)

  return  (
     <Layout>
       <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10 bg-blue-100">
         <aside className="col-span-1 lg:col-span-2 bg-blue-300 h-full rounded-md">
           <LeftAside toggle={toggle} setToggle={setToggle} />
           <Search toggle={toggle} setToggle={setToggle}/>
         </aside>
         {/*Right Aside*/}
         <aside className="col-span-1 lg:col-span-4 bg-blue-500 h-full rounded-md">
           <RightAside/>
         </aside>
       </div>
     </Layout>
  );
}

export default App;
