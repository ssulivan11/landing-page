import { tick } from 'svelte'
import { render } from '@testing-library/svelte'
import Currency from '../components/Currency.svelte'

test('should render Currency with mock fetch', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ rates: { USD: 1.2 } })
    })
  )

  const { container, getByText } = render(Currency)
  await tick()
  await tick() // for onMount..
  expect(container.querySelector('.currency')).toMatchSnapshot()
})

test('should alert when currency exchange is over $1.300', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ rates: { USD: 1.31 } })
    })
  )
  global.alert = jest.fn()
  render(Currency)
  await tick()
  await tick() // for onMount..
  expect(global.alert).toHaveBeenCalledTimes(1)
})
