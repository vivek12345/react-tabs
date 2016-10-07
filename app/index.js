import React, { Component } from 'react';
import Tabs from './components/tabs';
import TabList from './components/tablist';
import TabContent from './components/tabcontent';
import Content from './components/content';
import Tab from './components/tab';
import { render } from 'react-dom';
import TabsCss from '../sass/_tabs';
import Home from './components/home';
import About from './components/about';

class Index extends Component {
	render() {
		return (
			<Tabs activeTab={2}>
				<TabList>
					<Tab name='Home'>Home</Tab>
					<Tab name='About'>About</Tab>
					<Tab name='Blog'>Blog</Tab>
					<Tab name='Timeline'>Timeline</Tab>
				</TabList>
				<TabContent>
					<Content>
						<Home />
					</Content>
					<Content>
						<About />
					</Content>
					<Content></Content>
					<Content></Content>
				</TabContent>
			</Tabs>
		);
	}
}
render(<Index />, document.getElementById('root'));
