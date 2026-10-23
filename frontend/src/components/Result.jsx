import React from 'react'
import Form from './Form'
export default function Result({shortId}) {
  return (
    <>
    <div className='result-section'>
    <h4>Your Short URL is: {" "}{shortId ? (
        <a href={`http://localhost:8001/${shortId}`}
        target="_blank"
        rel="noreferrer">
            http://localhost:8001/{shortId}
        </a>
    ):(
        <span>....</span>
    )} </h4>
    </div>
    <div className='result-history'>
        <h4>Your Short URL history</h4>
        <table className='history-table'>
        <thead>
            <tr>
            <th>
                Sr.No.
            </th>
            <th>
                Your short urls
            </th>
            <th>
                Clicked History
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>bla</td>
            <td>0</td>
            </tr>
            <tr>
            <td>2</td>
            <td>bla</td>
            <td>0</td>
            </tr>
        </tbody>
        </table>
    </div>
    
    
    </>
  )
}
