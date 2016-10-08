import React, { Component } from 'react';

export default class TabContent extends Component {
	renderChildren(props) {
		return props.map((child, index) => {
			const clonedProps = {
				...child.props,
				key: index,
				isActive: this.props.activeTab == index?true: false,
			};
			return React.cloneElement(child, clonedProps);
		});
	}
	render() {
		return (
			<div className="tab-content">
				{ this.renderChildren(this.props.children) }
			</div>
		)
	}
}
