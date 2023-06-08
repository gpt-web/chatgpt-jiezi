import { request } from '@/utils'

export default {
  getUser: () => request.get('/sys_user'),
  refreshToken: () => request.post('/auth/refreshToken'),
}
