import React, { Component } from 'react';
import classnames from 'classnames';

export default class Tab extends Component {
	constructor(props) {
		super(props);
	}
	handleTabClick(event, index) {
		event.preventDefault();
		this.props.handleTabClick(index);
	}
	render() {
		const { position, name, isActive, children } = this.props;
		const tabClass = classnames(
			'nav-item',{
				'active': isActive
			}
		);
		return (
			<li className={tabClass} onClick={ (event, index) => this.handleTabClick(event, position) }>
				<a className="nav-link" data-toggle="tab" data-target={name} role="tab">
					{ name }
				</a>
			</li>
		)
	}
}
