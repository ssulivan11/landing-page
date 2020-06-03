//index.spec.js
import { render } from '@testing-library/svelte'
import promiseCurrencyMock from '../__mocks__/promise.mock'
import App from '../App.svelte'

test('should render App with props', () => {
  global.fetch = jest.fn()
  promiseCurrencyMock(0)
  const mockGreeting = 'Hello!'
  const allLinks = [
    {
      title: 'title',
      links: [
        {
          name: 'name',
          url: 'url'
        }
      ]
    }
  ]

  const { container, getByText } = render(App, {
    props: {
      greetings: mockGreeting,
      imageUrl: 'mockImageUrl.png',
      allLinks
    }
  })

  expect(getByText(mockGreeting)).toBeInTheDocument()
  expect(container.querySelector('.background').style._values).toEqual({
    '--image-url': 'url(mockImageUrl.png)'
  })
})
