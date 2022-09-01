import React, { useEffect, useState } from 'react'

const TestAssetDetail = () => {
  const [src, setSrc] = useState('#')

  useEffect(() => {
    setTimeout(() => {
      setSrc('https://asset.tezign.com/web/api/show_page/3?assetId=301066')
    }, 500)
  }, [])

  return (
    <div className='flex' style={{ height: '100vh '}}>
      <iframe width="100%" height="100%" src={src}></iframe>
    </div>
  )
}

export default TestAssetDetail