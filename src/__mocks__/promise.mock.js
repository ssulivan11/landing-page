export default (USD) =>
  (global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ rates: { USD } }),
    })
  ))
