import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import TextScroll from '../components/TextScroll'
import Project from '../components/Project'
import List from '../components/List'
import Form from '../components/Form'
import Fap from '../components/Fap'

const Home = () => {
  return (
    <div>
        <Header/>
        <Card/>
        <TextScroll/>
        <Project/>
        <List/>
        <Form/>
        <Fap/>
    </div>
  )
}

export default Home