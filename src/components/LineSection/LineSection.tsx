import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "./styles.module.scss"

const LineSection = () => {
  return (
    <div className={styles.bestCoffee}>
        <Container>
            <h1>O MELHOR CAFÉ<br/><span>PARA VOCÊ</span></h1>
        </Container>
    </div>
  )
}

export default LineSection