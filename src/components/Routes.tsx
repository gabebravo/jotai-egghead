import { Switch, Route } from 'wouter';
import Counter from './Counter';
import Home from './Home';
import DrawDots from './DrawDots';
import DotsOpt from './DotsOpt';
import DrawMulti from '../multi-lines/MultiLines';
import SelectableLines from '../selectable-lines/SelectableLines';
import ColorLines from '../color-lines/ColorLines';
import DeleteLines from '../delete-lines/ColorLines';
import UndoLines from '../undo-lines/UndoLines';
import JotaiProvider from '../jotai-provider/JotaiProvider';

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
    <Route path="/selectable-lines">
      <SelectableLines />
    </Route>
    <Route path="/color-lines">
      <ColorLines />
    </Route>
    <Route path="/delete-lines">
      <DeleteLines />
    </Route>
    <Route path="/undo-lines">
      <UndoLines />
    </Route>
    <Route path="/jotai-provider">
      <JotaiProvider />
    </Route>
  </Switch>
);

export default AllRoutes;
