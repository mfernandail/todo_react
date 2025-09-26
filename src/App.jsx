import Footer from './components/Footer'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import './styles/App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  )
}

export default App
