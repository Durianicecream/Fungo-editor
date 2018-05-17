import React from 'react'
import ReactDOM from 'react-dom'
import FungoEditor from '.././src'

class Demo extends React.Component {
	constructor() {
		super()
		this.state = {
			value: ''
		}
	}

	uploadProps = {
		name: 'image',
		action: '/api/upload/image'
	}

	onChange = (value) => {
		this.setState({ value })
	}

	render() {
		return (
			<div
				style={{
					paddingTop: '80px'
				}}
			>
				<FungoEditor
					onChange={this.onChange}
					uploadProps={this.uploadProps}
					defaultValue={this.state.value}
				/>
				<div
					style={{
						margin: '0 auto',
						width: '1000px',
						padding: '30px 0'
					}}
				>
					<h1>HTML文本</h1>
					{this.state.value}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Demo />, document.getElementById('root'))
