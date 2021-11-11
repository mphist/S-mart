import { css, Global } from '@emotion/react'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Global styles={globalStyle} />
      <Router>
        <Switch>
          <Layout>
            <Layout.Header>
              <Header />
            </Layout.Header>
            <Layout.Body>
              <Body />
            </Layout.Body>
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}

const globalStyle = css`
  body {
    font-family: 'Poppins', sans-serif;
  }
`

export default App
