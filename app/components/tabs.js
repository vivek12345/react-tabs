import React, { Component } from 'react';

export default class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.activeTab
		};
	}
	renderChildren(props) {
		return props.map((child, index) => {
			const clonedProps = {
				...child.props,
				key: index,
				activeTab: this.state.activeTab,
				handleTabClick: (index) => this.handleTabClick(index)
			};
			return React.cloneElement(child, clonedProps);
		});
	}
	handleTabClick(index) {
		this.setState({
			activeTab: index
		});
	}
	render() {
		return (
			<div>
				{ this.renderChildren(this.props.children) }
			</div>
		)
	}
}
Tabs.propTypes = {
	activeTab: React.PropTypes.number.isRequired
};
Tabs.defaultProps = {
	activeTab: 0
};
