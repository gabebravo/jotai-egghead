import { Provider } from 'jotai';

import { SvgRoot } from './SvgRoot';
import { Controls } from './Controls';

/*   Jotai exposes Provider. It's like context Provider component, and under the hood it uses context.
     In the Provider component tree, global state is isolated. 
     
     Now, we can draw something on one canvas and the other canvas is not affected. 
     This means our atoms are not single terms. What we built with the atom function is called atom configs, 
     and they don't hold values. Provider has a store which holds atom values.
*/

const JotaiProvider = () => (
  <>
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
    <hr />
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
  </>
);

export default JotaiProvider;
