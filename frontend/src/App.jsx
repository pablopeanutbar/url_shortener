import React, { useState } from 'react'
import Hero from './components/Hero';
import Form from './components/Form'
import Result from './components/Result';
import "./App.css";

export default function App() {
  const [shortId, setShortId] = useState("")
  return (
    <>
     <Hero />
     <Form setShortId={setShortId}/>
     <Result shortId={shortId}/>
    </>
  )
}

