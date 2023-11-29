# @42Devs/fetch

A small native fetch wrapper to use with http request

[toc]

## Installation

```bash
# using pnpm (recommended)
pnpm install @42devs/fetch

```

## Using the wrapper

### example

```js
import {defaults, post } from '@42devs/fetch';

const url = 'https://jsonplaceholder.typicode.com/post';

const payload = {
  title: 'foo',
  body: 'bar',
  deep: {
    userId: 1,
  },
};

const response = await post(url, payload);

const

```
