import {useState} from 'react'
import PropTypes from 'prop-types'
// import './CounterApp.css'

const CounterApp = ({number}) => {

    const [counter, setCounter] = useState(number)

    const sum = () =>{
        setCounter( counter + 1)
    }
    const res = () =>{
        setCounter( counter -1)
    }
    const reset = () =>{
        setCounter(number)
    }
    



  return (
    <>
    <div className="container">

        <div className="titulo">
            <h2>Counter : </h2> 
        </div>
        <div className="subtitulo">
            <h3>{counter}</h3>

        </div>

        <div className="btn">
            <button onClick={sum} >+1</button>
            <button onClick={res} >-1</button>
            <button onClick={reset} >Reset</button>

        </div>
    </div>
            
    </>
  )
}

CounterApp.propTypes ={
    number : PropTypes.number,
}

CounterApp.defaultProps = {
    number: 1,
}

export default CounterApp