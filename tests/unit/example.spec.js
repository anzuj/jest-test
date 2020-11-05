import Vue from "vue";
import Vuetify from "vuetify";

import HelloWorld from "@/components/HelloWorld.vue";

import { createLocalVue, mount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // helper mount function to avoid repetition
  const mountFunction = (options) => {
    return mount(HelloWorld, {
      localVue,
      vuetify,
      ...options,
    });
  };

  // TEST 1 ----------------------------------------------------
  it("Mounts properly", () => {
    const wrapper = mountFunction();
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });

  // TEST 2 ----------------------------------------------------
  it("Title prop displays correctly", () => {
    const wrapper = mountFunction({
      propsData: { title: "Foobar" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  // TEST 3 ----------------------------------------------------
  it("Emit custom event", async () => {
    const wrapper = mountFunction({
      propsData: { count: 0 },
    });

    const button = wrapper.find("#incrementBtn");
    expect(button.exists()).toBe(true);

    const spy = spyOn(wrapper.vm, "increment");
    await button.trigger("click");
    // expect(wrapper.emitted().increment).toBeTruthy() //why does not work?
    expect(wrapper.vm.increment).toBeCalled(); //why this works?
  });

  // TEST 4 FAILS -------------------------------------------------
  it("Update count in DOM", async () => {
    const wrapper = mountFunction({
      propsData: { count: 0 },
    });
    expect(wrapper.find("#nr").text()).toBe("0"); //before emit
    await wrapper.vm.$emit("increment");
    // await Vue.nextTick()
    expect(wrapper.find("#nr").text()).toBe("1"); //after emit
  });
});

// TEST 3 works, but unsure if specific enough to test button click
/*  it('Emit custom event', () => {
    const wrapper = mountFunction()
    
     wrapper.vm.$emit('increment');
     expect(wrapper.emitted().increment).toBeTruthy()
 
   }) */
