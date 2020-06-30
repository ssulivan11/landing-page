# Landing Page

## Get Started

```bash
yarn
yarn dev
```

## Adding Links

In the project root add a `custom.json` file like the example below. Then add all your links to the dashboard array. Please reference [material.io](https://material.io/resources/icons/?style=baseline) for icon naming conventions.

Custom JSON template:

```json
{
  "dashboard": [],
  "images": []
}
```

Add this to the `dashboard` array:

```json
{
  "title": "Other",
  "links": [
    {
      "icon": "album",
      "name": "Music",
      "url": "https://music.youtube.com/"
    },
    {
      "name": "Twitter ",
      "url": "https://twitter.com/"
    },
    {
      "icon": "shopping_cart",
      "name": "Amazon",
      "url": "https://www.amazon.com/ref=nav_logo"
    }
  ]
}
```

## Adding Background Images

To add as many background images as you would like, build out the images array as exampled below.

```json
{
  "images": ["image-1.png", "image-2.png", "image-3.png"]
}
```

## Other Options

Zip code for weather and currency conversion. Define your currency to convert to USD and optionally provide a dollar value to send a simple alert bubble for notification. For weather, just provide a zip code.

```json
{
  "currency": {
      "convertFrom":"GBP",
      "alertAt": 2
   },
   "zipCode": "90210",
   ...
}
```

## Welcome Messages

To add welcome messages, add as many objects into each time of days array.

```json
{
  "morningText": [
    {
      "translate": "Goeie more",
      "lang": "afrikaans"
    }
  ],
  "afternoonText": [
    {
      "translate": "Goeie middag",
      "lang": "afrikaans"
    }
  ],
  "eveningText": [
    {
      "translate": "Goeienaand",
      "lang": "afrikaans"
    }
  ],
  "nightText": [
    {
      "translate": "Goeie nag",
      "lang": "afrikaans"
    }
  ]
}
```
