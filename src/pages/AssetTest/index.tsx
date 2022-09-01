import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button type="primary" onClick={() => navigate('/asset/detail')}>点击查看详情</Button>
    </div>
  )
}

export default Home