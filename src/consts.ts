// import.meta.env.BASE_URL may or may not have a trailing slash depending on
// config — normalize so callers can always do `${BASE_URL}/path`.
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')

export const SITE_NAME = 'SkateAT'
export const APP_STORE_URL = 'https://apps.apple.com/app/id6777763861'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.skateat.app'
export const GITHUB_URL = 'https://github.com/Playzkool/skate-at-site'
export const CONTACT_EMAIL = 'skate-at@mutenroshi.fr'
