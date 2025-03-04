import { shallowMount } from '@vue/test-utils'

import BaseInput from '@/components/BaseInput.vue'
  
  test('displays message', async () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': async (e: string) => await wrapper.setProps({ modelValue: e })
      },
    })
  
    await wrapper.find('input').setValue('This is a test string')
    expect (wrapper.props('modelValue')).toBe('This is a test string')
})