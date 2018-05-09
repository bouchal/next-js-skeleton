/**
 * You can append here everything what is default for every layout.
 *
 * Every layout should extend this Base component.
 *
 * When you pass some common variable from router to element, you can handle this here for usage in other layouts.
 */

import React from "react";

export default class BaseLayout extends React.Component {
	constructor(props)
	{
		super(props);

		this.urlKey = props.urlKey;
	}
}