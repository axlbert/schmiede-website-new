import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

export const hasConsent = () => {
  return Boolean(Cookies.get('CookieConsent'));
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const initGA = () => {
  if (!window.GA_INITIALIZED && hasConsent()) {
    forceInitGA()
  }
}

export const forceInitGA = () => {
  ReactGA.initialize('UA-93162103-1')
  window.GA_INITIALIZED = true
  logPageView()
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
