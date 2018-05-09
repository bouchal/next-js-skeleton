/**
 * Layout wrapper is use for common part of layouts.
 *
 * For example for base layout skeleton (logo, menu).
 * If you have more demanding structure (multiple layouts with different grinds), you can use it for their distinction
 * or some tracking codes.
 *
 * Here you can see usage of static content placed in `static` folder.
 */
import React from "react";

export default class LayoutWrapper extends React.Component {
	render()
	{
		return <React.Fragment>
			<div title="Feel FREE to remove this logo" style={{textAlign: 'center'}}>
				<img src="/static/bouchal_logo.png"/>
			</div>

			{this.props.children}
		</React.Fragment>
	}
}