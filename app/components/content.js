import React, { Component } from 'react';
import classnames from 'classnames';

class Content extends Component {
	render() {
		let contentClass = classnames(
			'tab-pane',{
				'active': this.props.isActive
			}
		);
		return (
			<div className={contentClass} role="tabpanel">
				{ this.props.children }
			</div>
		);
	}
}
export default Content;