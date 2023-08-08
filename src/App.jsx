import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PrivateRoute from './components/PrivateRoute';
import { Switch,BrowserRouter } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <Switch>
          <PublicRoute path="/signin"><SignIn /></PublicRoute>
          <PrivateRoute path="/"><Home /></PrivateRoute>
        </Switch>
        </ProfileProvider>
      </BrowserRouter>
  );
}

export default App;
