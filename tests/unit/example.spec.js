// Libraries
// import Vue from "vue";
import Vuetify from "vuetify";

// Components
import HelloWorld from "@/components/HelloWorld.vue";

// Utilities
import { createLocalVue, mount } from "@vue/test-utils";

// OPTIONAL HELPER MOUNT FUNCTION
const mountFunction = (options) => {
  return mount(HelloWorld, {
    localVue,
    vuetify,
    ...options,
  });

  // can be used as:
  // it('should have a custom title and match snapshot', () => {
  //   const wrapper = mountFunction({
  //     propsData: { title: 'Fizzbuzz' },
  //   })
};

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // TESTS BELOW

  // --------------------------------------------------------------------------------------

  it("Mounts properly", () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
    });

    expect(wrapper.vm).toBeTruthy();
  });

  // --------------------------------------------------------------------------------------

  it("Title prop displays correctly", () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { title: "Foobar" },
    });

    //option 1: we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();

    // Option 2a: we can locate relevant part in html (css selectors)
    // const title = wrapper.find('h4')

    // 2b and expect it to match the given prop
    // expect(title.text()).toBe('Foobar')
  });
  // --------------------------------------------------------------------------------------
});

// 2 -  EMIT PARENT EVENT
/*   it('should emit an event when the action v-btn is clicked', () => {
    const wrapper = mount(CustomCard, {
      localVue,
      vuetify,
      propsData: { title: 'Foobar' },
    })

    const event = jest.fn()
    const button = wrapper.find('.v-btn')

    // Here we bind a listener to the wrapper
    // instance to catch our custom event
    // https://vuejs.org/v2/api/#Instance-Methods-Events
    wrapper.vm.$on('action-btn:clicked', event)

    expect(event).toHaveBeenCalledTimes(0)

    // Simulate a click on the button
    button.trigger('click')

    // Ensure that our mock event was called
    expect(event).toHaveBeenCalledTimes(1)
  }) */

// 3 - just VUE
// describe('HelloWorld.vue', () => {
//   it('renders props.title when passed', () => {
//     const title = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { title }
//     })
//     expect(wrapper.text()).toMatch(title)
//   })
// })

// 4 - VUETIFY IF MOUNTS
/*
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const vuetify = new Vuetify()
const wrapper = mount(HelloWorld , {
  vuetify
})

describe('HelloWorld .vue:', () => {
  it('1. Mounts properly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
}) 
*/



