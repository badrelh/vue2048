import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import GameControls from '~/components/GameControls.vue';

describe('GameControls.vue', () => {
  it('devrait afficher le score en orange lorsque le score est >= 128', () => {
    const wrapper = mount(GameControls, {
      props: {
        score: 128,
      },
    });

    const scoreElement = wrapper.get('[data-test="score"]').element;
    expect((scoreElement as HTMLParagraphElement).classList.contains('text-orange-500')).toBe(true);
  });
});
