import { useContext } from 'react'

import './Exclusive.css'

import { LanguageContext } from '../../contexts/LanguageContext'

function Exclusive ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <div className={newClass !== '' ? `${newClass} Exclusive` : 'Exclusive'}>
      <h2>{language.exclusiveTitle}</h2>
      <p>{language.exclusiveDescription}</p>
      <div className='Exclusive-grid'>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/ac915426b021288c04f8908ce12d080dcd70953fe0fac328383c7d5e3a253843/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/63c1be4d37c015f7861a3a7c284c5afa74c77d29d609f56a5400f1f34d85c5b4/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/1742d878d2d5475eae2afba94902b3b41b313fe1f0897579c3293c5b82c70693/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/8572f24f7ff388caa7c786a821cb2a34030141f5d81ea1c35444bad71faf1c0d/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/24069b782e1b1531b7197153b6ac1819191ca448aa4576cdd3767fa47270aae3/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/3b3873e224ad242c3881403e14bac752101fe4658900f5bb23b0eaab77313797/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/5a18c94c533869bbe5abeea4e94d9866d3f48f0d5aa6cb4b6a40e91d4c281c2b/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/c6a366b03bb9f332381cf85c8aaf93924540ed1a3dbc601d050bfcb52080a54e/original' alt='Exclusive Disney+' />
        </div>
        <div className='Exclusive-gridItem'>
          <img src='https://cnbl-cdn.bamgrid.com/assets/aa512dad255ee92217f66c4fd5a5f01790fb718230f6ef99c4a8ac924c2c4c70/original' alt='Exclusive Disney+' />
        </div>
      </div>
    </div>
  )
}

export default Exclusive
