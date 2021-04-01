import React, { useState } from 'react';
import QrReader from 'react-qr-reader'

const CodeReader = (history) => {

    const [result, setResult] = useState("")
     
  const handleScan = data => {
    if (data) {
        setResult(data)
        history.push(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }
    
    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={(handleScan)}
                style={{ width: '500px' }}
            />
            <p>{result}</p>
        </div>
    );
};

export default CodeReader;