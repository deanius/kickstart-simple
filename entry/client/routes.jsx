import { Route, IndexRoute } from 'react-router'

import TodoApp from 'TodoApp/client/TodoApp'
import ChessComponent from 'TodoApp/client/ChessComponent'

ReactRouterSSR.Run(
  <Route>
    <Route path="/" component={TodoApp}>
      <IndexRoute component={ChessComponent} />
    </Route>
  </Route>
)
