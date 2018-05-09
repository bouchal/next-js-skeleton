/**
 * Example of creating some base layout with Client and Server distinction.
 *
 * You can have multiple of these, but it should always extend BaseLayout with common functionality.
 * For some scenarios you want actions only for client or server side of rendering. That`s why there is
 * isServer constant and you can separe it.
 *
 * Beware of using isServer directly in render function.
 * Always do it via state. Otherwise it will throw Client vs. Server match warning
 * and cause problems with right rendering.
 */

import React from "react";
import BaseLayout from "./BaseLayout";
import LayoutWrapper from "./LayoutWrapper";
import Title from "../components/Title";
import CurrentTime from "../components/CurrentTime";
import isServer from "../lib/isServer";

export default class DefaultLayout extends BaseLayout {
	constructor(props)
	{
		super(props);

		this.state = {
			isServer: true
		}
	}

	componentDidMount()
	{
		this.setState({
			isServer: isServer
		})
	}

	render()
	{
		return (
			<LayoutWrapper>
				<Title>Hello world</Title>
				<ul>
					<li>
						<strong>Usage of passing variable from backed:</strong> environment name is {CONF_ENV_NAME}
					</li>
					<li>
						<strong>Distinction between backend and frontend side rendering:</strong> {this.state.isServer ? 'server' : 'client'}
					</li>
					<li>
						<strong>Response from page API:</strong> <CurrentTime/>
					</li>
				</ul>
			</LayoutWrapper>
		)
	}
}