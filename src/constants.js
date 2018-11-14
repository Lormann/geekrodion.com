import { DateTime } from 'luxon'

export const TICK_PERIOD = 500
export const PHOTO_PERIOD = 5000

export const PHOTOS = Array.from(Array(14).keys()).map(
  number => `/photos/${number}.jpg`
)

export const DOB = DateTime.fromMillis(892371600000)

export const EMAIL = 'geekrodion@gmail.com'

export const THEME = {
  color: {
    fontColor: '#FFFFFF',
    backgroundColor: '#111111'
  }
}