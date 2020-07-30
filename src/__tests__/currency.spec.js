import { tick } from 'svelte'
import { render } from '@testing-library/svelte'
import promiseCurrencyMock from '../__mocks__/promise.mock'
import Currency from '../components/Currency.svelte'

test('should render Currency with mock fetch', async () => {
  promiseCurrencyMock(1.2)
  const { container } = render(Currency)
  await tick()
  await tick() // for onMount..
  expect(container.querySelector('.currency')).toMatchSnapshot()
})

test('should alert when currency exchange is over $1.5', async () => {
  promiseCurrencyMock(1.5)
  global.alert = jest.fn()
  render(Currency)
  await tick()
  await tick() // for onMount..
  expect(global.alert).toHaveBeenCalledTimes(1)
})
