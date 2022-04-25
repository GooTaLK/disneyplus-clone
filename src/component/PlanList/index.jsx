import { useContext } from 'react'

import './PlanList.css'

import Plan from '../Plan'

import { LanguageContext } from '../../contexts/LanguageContext'

function PlanList ({ newClass = '' }) {
  const { language } = useContext(LanguageContext)

  return (
    <section className={newClass !== '' ? `${newClass} PlanList` : 'PlanList'}>
      <h1>{language.planListTitle}</h1>
      <ul className='PlanList-plans'>
        <li>
          <Plan
            backgroundUrl={language.imagesSource.comboPlanBackground}
            title={language.planComboTitle}
            currency={language.planComboCurrency}
            description={language.planComboDescription}
            link='https://www.disneyplus.com/sign-up?type=bundle'
            buttonText={language.planComboButtonText}
            buttonColor='#6421ff'
          />
        </li>
        <li>
          <Plan
            backgroundUrl='https://cnbl-cdn.bamgrid.com/assets/efaea987d8fd52ec2ae20c48c4c6a3766465925a00b26fe7e70b26a85e0a6f26/original'
            title={language.planMonthlyTitle}
            currency={language.planMonthlyCurrency}
            description={language.planMonthlyDescription}
            link='https://www.disneyplus.com/sign-up?type=standard'
            buttonText={language.planMonthlyButtonText}
          />
        </li>
        <li>
          <Plan
            backgroundUrl='https://cnbl-cdn.bamgrid.com/assets/efaea987d8fd52ec2ae20c48c4c6a3766465925a00b26fe7e70b26a85e0a6f26/original'
            title={language.planYearlyTitle}
            currency={language.planYearlyCurrency}
            description={language.planYearlyDescription}
            link='https://www.disneyplus.com/billing?skuInterval=annual&toggle=shown'
            buttonText={language.planYearlyButtonText}
          />
        </li>
      </ul>
      <footer className='PlanList-footer'>
        <br />
        <p className='footnote'>{language.planListFooter}</p>
      </footer>
    </section>
  )
}

export default PlanList
