export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          mergePaths: false,
        },
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [{ viewBox: "0 0 24 24" }],
      },
    },
  ],
};
