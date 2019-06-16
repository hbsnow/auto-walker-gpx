import { parseLocation } from '@hbsnow/move-on-coords'
import { getCurrentLocation } from '../common/getCurrentLocation'
import * as types from './types'

export const state = () => ({
  loading: false,
  nextSelected: false,
  current: {
    latitude: 0,
    longitude: 0
  },
  next: {
    latitude: 0,
    longitude: 0
  },
  distance: 0
})

export const getters = {
  [types.LOADING](state) {
    return state.loading
  },
  [types.NEXT_SELECTED](state) {
    return state.nextSelected
  },
  [types.CURRENT](state) {
    return state.current
  },
  [types.NEXT](state) {
    return state.next
  },
  [types.DISTANCE](state) {
    return state.distance
  }
}

export const actions = {
  async [types.CURRENT_LOCATE]({ commit }) {
    commit(types.LOADING, true)

    try {
      const location = await getCurrentLocation()
      commit(types.CURRENT, {
        latitude: parseLocation(location.coords.latitude, 7),
        longitude: parseLocation(location.coords.longitude, 7)
      })
    } catch (error) {
      //
    }

    commit(types.LOADING, false)
  },
  [types.NEXT_LOCATE]({ commit }, { latitude, longitude }) {
    if (!state.nextSelected) commit(types.NEXT_SELECTED, true)

    commit(types.NEXT, {
      latitude: parseLocation(latitude, 7),
      longitude: parseLocation(longitude, 7)
    })
  }
}

export const mutations = {
  [types.LOADING](state, loading) {
    state.loading = loading
  },
  [types.NEXT_SELECTED](state, nextSelected) {
    state.nextSelected = nextSelected
  },
  [types.CURRENT](state, current) {
    state.current = current
  },
  [types.NEXT](state, next) {
    state.next = next
  },
  [types.DISTANCE](state, distance) {
    state.distance = distance
  }
}
