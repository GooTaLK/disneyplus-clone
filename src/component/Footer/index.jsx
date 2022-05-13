import { useContext, useState } from 'react'

import './Footer.css'

import { LanguageContext } from '../../contexts/LanguageContext'

function Footer ({ newClass = '' }) {
  const { language, toggleLanguage } = useContext(LanguageContext)

  const [languageSelected, setLanguageSelected] = useState(language.language)

  function changeLanguageHandler (event) {
    const language = event.target.value
    toggleLanguage(language)
    setLanguageSelected(language)
  }

  return (
    <footer className={newClass !== '' ? `${newClass} Footer` : 'Footer'}>
      <img
        className='Footer-logo'
        src='https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original'
        alt='Disney logo'
      />
      <div className='Footer-actions'>
        <span className='Footer-selectLanguage'>
          <svg className='Footer-globe' viewBox='0 0 710 724'>
            <path className='cls-1' d='M347.2,92.13a273.81,273.81,0,1,1-106.93,21.58A273,273,0,0,1,347.2,92.13m0-33c-170,0-307.74,137.79-307.74,307.75S177.24,674.62,347.2,674.62,655,536.84,655,366.88,517.17,59.13,347.2,59.13Z' />
            <path className='cls-2' d='M373.5,77.5s108,59,108,297c0,220-116,283-116,283' />
            <path className='cls-2' d='M325.91,77.5S210,136.5,210,374.5c0,220,124.5,283,124.5,283' />
            <path className='cls-2' d='M100,211s111,24,247,24c134,0,239-24,239-24' />
            <path className='cls-2' d='M586,521s-111-24-247-24c-134,0-239,24-239,24' />
            <line className='cls-2' x1='59' y1='367' x2='635' y2='367' />
          </svg>
          <svg className='Footer-down' viewBox='0 0 48 48'>
            <rect width='48' height='48' fill='none' />
            <path d='M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z' />
          </svg>
          <select className='fine' value={languageSelected} onChange={changeLanguageHandler}>
            <option value='english'>English</option>
            <option value='spanish'>Español</option>
          </select>
        </span>
        <ul className='Footer-links fine'>
          <li>
            <a
              href='https://disneytermsofuse.com/english/'
              target='_blank'
              rel='noreferrer noopener'
            >
              {language.termsOfUse}
            </a>
          </li>
          <li>
            <a
              href='https://www.disneyplus.com/legal/privacy-policy'
              target='_blank'
              rel='noreferrer noopener'
            >
              {language.privacyPolicy}
            </a>
          </li>
          <li>
            <a
              href='https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus'
              target='_blank'
              rel='noreferrer noopener'
            >
              {language.interestBasedAds}
            </a>
          </li>
          <li>
            <a
              href='https://help.disneyplus.com/csp?id=csp_article_content&article=devices-supported'
              target='_blank'
              rel='noreferrer noopener'
            >
              {language.supportedDevices}
            </a>
          </li>
          <li>
            <a
              href='https://help.disneyplus.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              {language.helpCenter}
            </a>
          </li>
          <li>
            <a
              href='https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fhelp.disneyplus.com%2Fcsp%3Fid%3Dcsp_article_content_international%26sys_kb_id%3D8d061aaadb7004903c0cf158bf9619ed&data=04%7C01%7Cpamela.yuli%40disneystreaming.com%7Cf18478267d574292b5f608d99b03a314%7C65f03ca86d0a493e9e4ac85ac9526a03%7C1%7C0%7C637711262201165571%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=mp2uZAhHUXOORZTc9PKW1UJnDIfQ%2BLi7JuOekdVSYxU%3D&reserved=0'
              target='_blank'
              rel='noreferrer noopener'
            >
              {language.aboutUs}
            </a>
          </li>
        </ul>
      </div>
      <p className='footnote'>{language.copyRight}</p>
      <p className='footnote'>{language.claimer}</p>
    </footer>
  )
}

export default Footer
