import React from 'react'
import Icon from './../../components/Icon'
import DropDown from './../../components/Dropdown'

const addEmoji = (value, emoji) => {
	const change = value.change()
	return change
		.insertText(emoji)
		.collapseToStartOfNextText()
		.focus()
}

const EMOJIS = [
	'😃',
	'😬',
	'😂',
	'😅',
	'😄',
	'😆',
	'😍',
	'😱',
	'😎',
	'🙄',
	'🤣',
	'😄',
	'🤣',
	'😜',
	'💩'
]

class ControlButton extends React.Component {
	constructor() {
		super()
		this.state = {
			dropdownVisible: false
		}
	}

	showDropDown = (event) => {
		this.setState({ dropdownVisible: true })
		event.nativeEvent.stopImmediatePropagation()
		document.addEventListener('click', this.hideDropDown)
	}

	hideDropDown = (event) => {
		this.setState({ dropdownVisible: false })
		document.removeEventListener('click', this.hideDropDown)
	}

	render() {
		const { onChange, value } = this.props
		return (
			<span>
				<Icon name="smile-o" onClick={this.showDropDown} tip="表情" />
				<DropDown
					data={EMOJIS.map((item) => (
						<i
							onClick={(e) => {
								onChange(addEmoji(value, item))
							}}
						>
							{item}
						</i>
					))}
					type="inline"
					visible={this.state.dropdownVisible}
				/>
			</span>
		)
	}
}

export default (options) => {
	return {
		changes: {
			addEmoji
		},
		components: {
			ControlButton
		}
	}
}
