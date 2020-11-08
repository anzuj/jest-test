import Vue from "vue";
import Vuetify from "vuetify";

import CounterWrapper from "@/views/CounterWrapper.vue";
import Counter from "@/components/Counter.vue";

import { createLocalVue, mount } from "@vue/test-utils";

describe("Counter.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // helper mount function to avoid repetition
  const mountFactory = (cmp, options) => {
    return mount(cmp, {
      localVue,
      vuetify,
      ...options,
    });
  };

  // TEST 1 ----------------------------------------------------
  it("Mounts properly", () => {
    const wrapper = mountFactory(CounterWrapper);
    expect(wrapper.findComponent(CounterWrapper).exists()).toBe(true);
  });

  // TEST 2 ----------------------------------------------------
  it("Read nested component data", () => {
    const wrapper = mountFactory(CounterWrapper);
    // #sample is in child component Counter
    expect(wrapper.find("#sample").text()).toBe("cat");
  });

  // TEST 3 ----------------------------------------------------
  it("Counter button changes count in CounterWrapper", () => {
    const wrapper = mountFactory(CounterWrapper);

    //check if initial count in CounterWrapper is 0
    expect(wrapper.vm.count).toBe(0);

    //click btn in Counter (child component)
    wrapper.find("#incrementBtn").trigger("click");

    //or trigger emit from child directly (Counter needs to be imported first)
    // wrapper.findComponent(Counter).vm.$emit('increment')

    //check if increment worked and count has increased
    expect(wrapper.vm.count).toBe(1);
  });

  // TEST 2 ----------------------------------------------------
  /*   it("Emit custom event", async () => {
    const wrapper = mountFactory({
      propsData: { count: 0 },
    });

    const button = wrapper.find("#incrementBtn");
    expect(button.exists()).toBe(true);

    const spy = spyOn(wrapper.vm, "increment");
    await button.trigger("click");
    // expect(wrapper.emitted().increment).toBeTruthy() //why does not work?
    expect(wrapper.vm.increment).toBeCalled(); //why this works?
  }); */

});

// TEST 3 trigger an emit directly
/*  it('Emit custom event', () => {
    const wrapper = mountFactory()
    
     wrapper.vm.$emit('increment');
     expect(wrapper.emitted().increment).toBeTruthy()
 
   }) */
