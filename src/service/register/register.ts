import hyRequest from '..'

export function register(data: any) {
  return hyRequest.post({
    url: '/auth/register',
    data
  })
}
