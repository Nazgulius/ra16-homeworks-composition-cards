import { Cards } from './components/Cards'
import { Svgimg } from './components/Svgimg'
import { CardBody } from './components/CardBody'

import './App.css'

function App() {

  return (
    <>
      <Cards >
        <Svgimg />

        <CardBody>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
      </Cards>
    </>
  )
}

export default App
