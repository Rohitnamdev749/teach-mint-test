import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import useFetchApi from "./customHooks/useFetchApi";
import PageNotFound from './components/PageNotFound';
import UserProfile from './pages/UserProfile';
function App() {
  const Users = useFetchApi("https://jsonplaceholder.typicode.com/users");
  const Posts = useFetchApi("https://jsonplaceholder.typicode.com/posts");
  const timeZone = useFetchApi("http://worldtimeapi.org/api/timezone/America/Argentina/Salta");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage users={Users.data} posts={Posts.data}/>} loading={Users.loading} postLoading={Posts.loading}/>
          <Route path="/user/:id" element={<UserProfile posts={Posts.data} timeZone={timeZone.data} loading={Posts.loading} timeZoneLoading={timeZone.loading}/>}></Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
