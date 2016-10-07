import React, { Component } from 'react';

class TabList extends Component {
	constructor(props) {
		super(props);
	}
	renderChildren(props) {
		return props.map((child, index) => {
			const clonedProps = {
				...child.props,
				key: child.props.name,
				position: index,
				isActive: this.props.activeTab == index?true: false,
				handleTabClick: (index) => this.props.handleTabClick(index)
			};
			return React.cloneElement(child, clonedProps);
		});
	}
	render() {
		return (
			<ul className="nav nav-tabs" role="tablist">
				{ this.renderChildren(this.props.children) }
			</ul>
		)
	}
}
export default TabList;
