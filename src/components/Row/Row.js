
import React from 'react'

function Row() {

const weatherAPIKey = require("./weatherAPIKey");

    return (
    <div>API-key: {weatherAPIKey.key}</div>
  )
}

export default Row;
