import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loader() {
  return (
    <div>Loading ...
        <Spinner animation="border" size="sm" />

    </div>
  )
}

export default Loader