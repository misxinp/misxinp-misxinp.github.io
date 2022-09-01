import React from 'react'
import { Button } from 'antd'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.page}>
      这是首页
    </div>
  )
}

export default Home