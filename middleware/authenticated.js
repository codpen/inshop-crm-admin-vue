export default function (params) {
  const token = params.store.getters['auth/jwtDecoded'] || null

  if (!(token && token.exp > Date.now() / 1000)) {
    params.store.commit('auth/AUTH_RESET')

    return params.redirect('/')
  }
}
