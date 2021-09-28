import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
      </Layout>
    </div>
  )
}

export default App
