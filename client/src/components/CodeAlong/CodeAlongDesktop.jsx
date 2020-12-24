import React from 'react'
import './code-along.css'
import CodeIcon from '@material-ui/icons/Code'
import {
	CODE_ALONG_DESCRIPTION,
	CODE_ALONG_EXECUTE,
} from './CodeAlongStringIds'

const styles = {
	codeIcon: {
		fontSize: 80,
		color: '#f5f5f5',
	},
}

const CodeAlongDesktop = () => (
	<div className="code-along-bg py-5 text-center">
		<CodeIcon style={styles.codeIcon} />
		<h1 className="code-along-text font-weight-bold display-5 pb-2">
			{CODE_ALONG_EXECUTE}
		</h1>
		<p className="code-along-description mb-5 m-auto w-50 lead">
			{CODE_ALONG_DESCRIPTION}
		</p>
		<img
			className="code-along-img pt-5 w-75"
			src="./images/Code-Along.png"
			alt="code along placeholder"
		/>
	</div>
)

export default CodeAlongDesktop
export { default as CodeAlongDesktop } from './CodeAlongDesktop'