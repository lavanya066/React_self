import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Super_heroPage } from './Components/Super_hero.page';
import { RQSuperheroPage } from './Components/RQSuperhero.page';
import { Homepage } from './Components/Home.page';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient=new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    
      <div>
        <nav>
          <ul>
          <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            
            <Route path='/' element={<Homepage></Homepage>}></Route>
              <Route path='/super-heroes' element={<Super_heroPage></Super_heroPage>}></Route>
              <Route path='/rq-super-heroes' element={<RQSuperheroPage></RQSuperheroPage>}></Route>
            </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false}
      position='bottom-right' >

      </ReactQueryDevtools>
    </QueryClientProvider>
   
  );
}

export default App;
