import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import GameControls from '~/components/GameControls.vue'

describe('gameControls.vue', () => {
  it('devrait afficher le score en orange lorsque le score est >= 128', () => {
    const wrapper = mount(GameControls, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
      props: {
        score: 128,
      },
    })

    const scoreElement = wrapper.get('[data-test="score"]').element
    expect((scoreElement as HTMLDivElement).classList.contains('text-orange-500')).toBe(true)
  })
})
