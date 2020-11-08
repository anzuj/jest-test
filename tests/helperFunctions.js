export const mountFactory = (cmp, options) => {
  return mount(cmp, {
    localVue,
    vuetify,
    ...options,
  });
};


