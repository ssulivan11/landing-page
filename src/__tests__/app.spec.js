import { render } from '@testing-library/svelte'
import promiseCurrencyMock from '../__mocks__/promise.mock'
import App from '../App.svelte'

test('should render App with props', () => {
  global.fetch = jest.fn()
  promiseCurrencyMock(0)
  const mockGreeting = {
    time: 'morning',
    text: { translate: 'Hello!', language: 'english' },
  }
  const allLinks = [
    {
      title: 'title',
      links: [
        {
          name: 'name',
          url: 'url',
        },
      ],
    },
  ]

  const { container, getByText } = render(App, {
    props: {
      greeting: mockGreeting,
      allLinks,
    },
  })

  expect(getByText(mockGreeting.text.translate)).toBeInTheDocument()

  expect(
    container.querySelector('.background').style._values['--image-url']
  ).toMatch(/images/)
})
