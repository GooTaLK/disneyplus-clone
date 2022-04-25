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
          <select className='fine' value={languageSelected} onChange={changeLanguageHandler}>
            <option value='english'>English</option>
            <option value='spanish'>Español</option>
          </select>
        </span>
        <ul className='Footer-links fine'>
          <li>
            <a href='https://disneytermsofuse.com/english/'>
              {language.termsOfUse}
            </a>
          </li>
          <li>
            <a href='https://www.disneyplus.com/legal/privacy-policy'>
              {language.privacyPolicy}
            </a>
          </li>
          <li>
            <a href='https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus'>
              {language.interestBasedAds}
            </a>
          </li>
          <li>
            <a href='https://help.disneyplus.com/csp?id=csp_article_content&article=devices-supported'>
              {language.supportedDevices}
            </a>
          </li>
          <li>
            <a href='https://help.disneyplus.com/'>
              {language.helpCenter}
            </a>
          </li>
          <li>
            <a href='https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fhelp.disneyplus.com%2Fcsp%3Fid%3Dcsp_article_content_international%26sys_kb_id%3D8d061aaadb7004903c0cf158bf9619ed&data=04%7C01%7Cpamela.yuli%40disneystreaming.com%7Cf18478267d574292b5f608d99b03a314%7C65f03ca86d0a493e9e4ac85ac9526a03%7C1%7C0%7C637711262201165571%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=mp2uZAhHUXOORZTc9PKW1UJnDIfQ%2BLi7JuOekdVSYxU%3D&reserved=0'>
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
