import './DevicesItem.css'

function DevicesItem ({ imageSource, imageAlt, title, devices }) {
  return (
    <div className='Devices-gridItem'>
      <img src={imageSource} alt={imageAlt} />
      <h3>{title}</h3>
      <ul>
        {
          devices.map((device, index) => {
            return <li key={index}><p className='medium'>{device}</p></li>
          })
        }
      </ul>
    </div>
  )
}
export default DevicesItem
