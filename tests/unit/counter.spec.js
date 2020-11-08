import Vue from "vue";
import Vuetify from "vuetify";

import Counter from "@/components/Counter.vue";

import { createLocalVue, mount } from "@vue/test-utils";

describe("Counter.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // helper mount function to avoid repetition
  const mountFactory = (options) => {
    return mount(Counter, {
      localVue,
      vuetify,
      ...options,
    });
  };

  // TEST 1 ----------------------------------------------------
  it("Mounts properly", () => {
    const wrapper = mountFactory();
    expect(wrapper.findComponent(Counter).exists()).toBe(true);
  });

  // TEST 2 ----------------------------------------------------
  it("Count prop displays correctly", () => {
    const wrapper = mountFactory({
      propsData: { count: 5 },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  // TEST 3 isolated local increment-----------------------------
  it("Local increment", async() => {
    const wrapper = mountFactory();
    expect(wrapper.vm.localcount).toBe(0); //initial state

    wrapper.find("#incrementLocal").trigger("click");

    expect(wrapper.vm.localcount).toBe(1); //after click
  });

  // TEST 4 emits event to parent-----------------------------
  it("Emits increment event", () => {
    const wrapper = mountFactory();
    wrapper.vm.$emit("increment");

    // assert event has been emitted
    expect(wrapper.emitted().increment).toBeTruthy();
  });
});
