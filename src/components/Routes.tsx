import { Switch, Route } from 'wouter';
import Counter from './Counter';
import Home from './Home';
import DrawDots from './DrawDots';

const AllRoutes = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/counter">
      <Counter />
    </Route>
    <Route path="/draw-dots">
      <DrawDots />
    </Route>
  </Switch>
);

export default AllRoutes;