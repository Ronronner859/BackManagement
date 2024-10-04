let BASE_URL = ''
let TIME_OUT = 10000

if (import.meta.env.MODE === 'development') {
  BASE_URL = 'http://localhost:5000/api'
  TIME_OUT = 10000
} else {
  BASE_URL = 'http://codercba.com:8000'
  TIME_OUT = 10000
}

export { BASE_URL, TIME_OUT }
