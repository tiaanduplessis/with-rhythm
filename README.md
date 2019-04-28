
# with-rhythm
[![package version](https://img.shields.io/npm/v/with-rhythm.svg?style=flat-square)](https://npmjs.org/package/with-rhythm)
[![package downloads](https://img.shields.io/npm/dm/with-rhythm.svg?style=flat-square)](https://npmjs.org/package/with-rhythm)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/with-rhythm.svg?style=flat-square)](https://npmjs.org/package/with-rhythm)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Configurable typography

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install with-rhythm
$ # OR
$ yarn add with-rhythm
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import withRhythm, {toString} from 'with-rhythm'
import styled from 'styled-components'

const r = withRhythm()
console.log(r)
// root: Object
// h6: Object
// h5: Object
// h4: Object
// h3: Object
// h2: Object
// h1: Object

const Content = styled.main`
	${toString(r.root)}
`

const H1 = styled.h1`
	${toString(r.h1)}
`

const H2 = styled.h2`
	${toString(r.h2)}
`

const H3 = styled.h3`
	${toString(r.h3)}
`

const H4 = styled.h4`
	${toString(r.h4)}
`

const H5 = styled.h5`
	${toString(r.h5)}
`

const H6 = styled.h6`
	${toString(r.h6)}
`

function App() {
	return (
		<Content>
			<H1>Heading one</H1>
			<H2>Heading two</H2>
			<H3>Heading three</H3>
			<H4>Heading four</H4>
			<H5>Heading five</H5>
			<H6>Heading six</H6>
			<p>This is some content</p>
		</Content>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    