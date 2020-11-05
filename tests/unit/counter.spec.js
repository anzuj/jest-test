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
  const wrapperFactory = (options) => {
    return mount(Counter, {
      localVue,
      vuetify,
      propsData: { count: 0 },
    });
  };

  // TEST 1 as in https://vue-test-utils.vuejs.org/guides/#testing-asynchronous-behavior
  it("Click should increment count text", async () => {
    const wrapper = wrapperFactory();

    expect(wrapper.find("#propTracker").text()).toBe("0"); //initial state

    const button = wrapper.find({ ref: "incrementProp" });
    await button.trigger("click"); //trigger click

    expect(wrapper.find("#propTracker").text()).toBe("1"); //after click
  });

  // TEST 2 -------------------------------------------------
  it("Emit should increment prop", () => {
    const wrapper = wrapperFactory();
    expect(wrapper.props().count).toBe(0); //initial state

    wrapper.vm.$emit("increment"); //trigger custom event emit

    expect(wrapper.props().count).toBe(1); //after emit
  });

  // TEST 3 local count --------------------------------------
  it("Local increment", () => {
    const wrapper = wrapperFactory();
    expect(wrapper.vm.localcount).toBe(0); //initial state

    const button = wrapper.find({ ref: "incrementLocal" });
    button.trigger("click"); //trigger click

    expect(wrapper.vm.localcount).toBe(1); //after click
  });
});

// UNUSED STUFF ----------------------------------------------------
/*   it("Custom event gets emitted to parent on click", async () => {
    const wrapper = wrapperFactory({
      propsData: { count: 0 },
    });

    const button = wrapper.find({ ref: "incrementProp" });
    expect(button.exists()).toBe(true);

    const spy = spyOn(wrapper.vm, "increment");
    await button.trigger("click");
    // expect(wrapper.emitted().increment).toBeTruthy() //why does not work?
    expect(wrapper.vm.increment).toBeCalled(); //works

  });
  
  
    // just reading prop methods -------------------------------------
  it("Read props", () => {
    const wrapper = wrapperFactory({
      propsData: { count: 0 },
    });
    // check prop values
    expect(wrapper.props().count).toBe(0);
    // or
    expect(wrapper.html()).toMatchSnapshot();
    // or
    expect(wrapper.vm.count).toBe(0);
    //or
    expect(wrapper.props()).toEqual({ count: 0 });

    // check DOM text values
    expect(wrapper.find("#propTracker").text()).toBe("0");
  });
  
  */
