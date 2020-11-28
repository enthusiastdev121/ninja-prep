import React from 'react'
import '../css/code-along.css'
import CodeIcon from '@material-ui/icons/Code'

function CodeAlong() {
	return (
		<div className="code-along-container landing-page-container">
			<CodeIcon style={{ fontSize: 80, color: 'white' }} />
			<h1 className="landing-page-title code-along-title">
				Code Along & Execute
			</h1>

			<p className="landing-page-description code-along-description">
				New skills have a higher chance of being retained when practiced. Code
				along with our videos then execute by solving our challenges! We support
				over 5+ languages and customizable themes.
			</p>
			<img className="code-along-img" src="./images/Code-Along.png" alt="code along placeholder" />
		</div>
	)
}

export default CodeAlong
export { default as CodeAlong } from './CodeAlong'
