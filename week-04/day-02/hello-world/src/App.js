import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/error" component={ErrorPage} />
        <Route component={undefinedPage} />
      </Switch>
    </Router>
  )
}

const Home = () => <p>Hello world!</p>
const undefinedPage = () => <p>This page is not implemented yet</p>
const ErrorPage = ({ match }) => (
  <div>
    {match.isExact ? <p>Something bad happened.</p> : null}
    <Route path={`${match.path}/:errorcode`} component={ErrorCodePage} />
    
  </div>
)
const ErrorCodePage = ({ match }) => (
  <p>{`Error: <${match.params.errorcode}>`}</p>
)

export default App
