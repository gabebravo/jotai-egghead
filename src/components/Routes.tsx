import { Switch, Route } from 'wouter';
import Counter from './Counter';
import Home from './Home';
import DrawDots from './DrawDots';
import DotsOpt from './DotsOpt';
import DrawMulti from '../multi-lines/MultiLines';

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
    <Route path="/draw-opt">
      <DotsOpt />
    </Route>
    <Route path="/draw-multi">
      <DrawMulti />
    </Route>
  </Switch>
);

export default AllRoutes;
