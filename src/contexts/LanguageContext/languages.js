const country = {
  currency: 'PEN',
  prices: {
    combo: '44.90',
    monthly: '25.90',
    yearly: '259.90'
  }
}

const languages = {
  english: {
    loginButton: 'LOG IN',
    signupButton: 'SIGN UP NOW',
    signupOnlyMonthly: 'Sign up only to Disney+ monthly',
    signupOnlyYearly: 'Sign up only to Disney+ yearly',
    offerComboPlusButton: 'GET COMBO+ OFFER',
    heroTitle: 'Enjoy the greatest stories, all in one place.',
    planListTitle: 'Choose your plan',
    planListFooter: '*The price may vary if billed through other currencies, platforms or payment methods. Third party charges may apply.',
    planComboTitle: 'GET STAR+ & DISNEY+',
    planComboCurrency: `${country.currency} ${country.prices.combo}/month*`,
    planComboDescription: 'Save and get the two services together, with this unique offer. Enjoy now Disney+ and Star+ for a special price.',
    planComboButtonText: 'SIGN UP TO COMBO+',
    planMonthlyTitle: 'DISNEY+ MONTHLY',
    planMonthlyCurrency: `${country.currency} ${country.prices.monthly}/month*`,
    planMonthlyDescription: 'Purchase the Disney+ monthly plan and enjoy the latest releases that come from the cinema, originals and classics.',
    planMonthlyButtonText: 'SIGN UP',
    planYearlyTitle: 'DISNEY+ YEARLY',
    planYearlyCurrency: `${country.currency} ${country.prices.yearly}/year*`,
    planYearlyDescription: 'A full year of series and movies from Disney, Pixar, Marvel, Star Wars and National Geographic at a unique price.',
    planYearlyButtonText: 'SIGN UP'
  },
  spanish: {
    loginButton: 'INICIAR SESIÓN',
    signupButton: 'SUSCRÍBETE AHORA',
    signupOnlyMonthly: 'Suscribirme solo a Disney+ mensual',
    signupOnlyYearly: 'Suscribirme solo a Disney+ anual',
    offerComboPlusButton: 'CONTRATÁ OFERTA COMBO+',
    heroTitle: 'Tus historias favoritas, todas en un mismo lugar.',
    planListTitle: 'Elige tu plan',
    planListFooter: '* El precio podría variar en caso de que el pago se realice en otras monedas, plataformas o medios de pago. Podrían aplicar cargos de terceros.',
    planComboTitle: 'CONTRATA DISNEY+ Y STAR+',
    planComboCurrency: `${country.currency} ${country.prices.combo}/mes*`,
    planComboDescription: 'Ahorra contratando los dos servicios juntos con esta oferta única. Disfruta Disney+ y Star+ por un precio único.',
    planComboButtonText: 'SUSCRÍBETE A COMBO+',
    planMonthlyTitle: 'DISNEY+ MENSUAL',
    planMonthlyCurrency: `${country.currency} ${country.prices.monthly}/mes*`,
    planMonthlyDescription: 'Contrata el plan mensual de Disney+ y disfruta los últimos estrenos del cine, originales y clásicos inolvidables.',
    planMonthlyButtonText: 'SUSCRÍBETE AHORA',
    planYearlyTitle: 'DISNEY+ ANUAL',
    planYearlyCurrency: `${country.currency} ${country.prices.yearly}/año*`,
    planYearlyDescription: 'Por un precio único, todo un año de películas y series de Disney, Pixar, Marvel, Star Wars y National Geographic.',
    planYearlyButtonText: 'SUSCRÍBETE AHORA'
  }
}

export { languages }
