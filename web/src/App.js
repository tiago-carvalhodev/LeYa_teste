import './App.css';
import Grid from './components/Grid/grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import SinglePost from './components/SinglePost/single-post';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/posts" element={<Grid />}>
          </Route>
          <Route path="/posts/:id" element={<SinglePost />}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
