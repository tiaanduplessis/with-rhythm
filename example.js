import React from 'react'
import ReactDOM from 'react-dom'
import withRhythm, {toString} from './with-r'
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
