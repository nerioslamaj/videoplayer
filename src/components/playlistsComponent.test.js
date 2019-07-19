import { mount } from '@vue/test-utils'
import playlistsComponent from './playlistsComponent.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(playlistsComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})