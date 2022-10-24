import React from 'react';
import PropTypes from 'prop-types'

const FirstApp = ({
    title,
    subTitle
}) => {
  return (
    <>
       
        <h1 data-testid="test-title" >{title}</h1>
        <hr/>
        <p>{subTitle}</p>
        <p>{subTitle}</p>


    </>
  )
}


FirstApp.propTypes={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps={
    subTitle: 999888,
    title: "No hay titulo"
}

export default FirstApp