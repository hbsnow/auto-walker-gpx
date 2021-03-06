import { parseLocation, lerp, move } from '@/common/map'

describe('parseLocation', () => {
  test('7桁の小数に変換する', () => {
    expect(parseLocation(1.41421356237)).toBe(1.4142136)
    expect(parseLocation(2.2360679775)).toBe(2.236068)
    expect(parseLocation(2.2360679775)).not.toBe(2.2360679)
    expect(parseLocation(5)).toBe(5)
  })
})

describe('lerp', () => {
  test('2点間の距離を求める', () => {
    expect(lerp([0, 0], [1, 2])).toBe(2.236068)
    expect(lerp([0, 0], [1, 2])).not.toBe(2.236067)
    expect(lerp([0, 0], [3, 4])).toBe(5)
  })
})

describe('move', () => {
  test('指定距離まで移動したときの座標', () => {
    expect(move([3, 4], [0, 0], 1)).toEqual({
      diff: -4,
      coords: [2.4, 3.2]
    })
    expect(move([0, 0], [3, 4], 1)).toEqual({
      diff: -4,
      coords: [0.6, 0.8]
    })
  })

  test('指定距離まで移動したときの座標', () => {
    expect(move([3, 4], [0, 0], 1)).toEqual({
      diff: -4,
      coords: [2.4, 3.2]
    })
    expect(move([0, 0], [3, 4], 1)).toEqual({
      diff: -4,
      coords: [0.6, 0.8]
    })
  })
})
