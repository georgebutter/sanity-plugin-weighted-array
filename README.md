# sanity-plugin-weighted-array

![ezgif-1-1c277b1c5d](https://user-images.githubusercontent.com/930712/236622038-19b4b16c-8d44-4611-b4de-efbc9b966f60.gif)

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-weighted-array
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {weightedArray} from 'sanity-plugin-weighted-array';

export default defineConfig({
  //...
  plugins: [weightedArray()],
})
```

Now you will have `weightedArray` available as n options on `array` fields.

```
import { defineField, defineType } from "sanity";

export const weightedArraySchema =  defineType({
  name: 'weightedArrayTests',
  title: 'Weighted Array Tests',
  type: 'document',
  fields: [
    defineField({
      name: 'weights',
      title: 'Variant weights',
      type: 'array',
      of: [{
        type: 'number',
      }],
      options: {
        // Plugin adds support for this option
        weightedArray: {
          // The array that you want to apply weights to
          arrayField: 'variants',
          // The field in the array that you want to use as the label
          labelField: 'title',
        }
      }
    }),
    // The array that we will apply weights to
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
          },
        ],
      }]
    }
  ]
});
```


## License

[MIT](LICENSE) © George Butter

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
