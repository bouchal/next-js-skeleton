/**
 * Here you have example of component with connection to server API.
 *
 * You can see, that we are using here constant `CONF_API_EP_SERVER_TIME` which is looks like undefined,
 * but babel plugin `transform-define` handle that it's loaded from feConfig.js.
 */

import React from "react";
import axios from "axios";

export default class CurrentTime extends React.Component {
	constructor(props)
	{
		super(props);

		this.state = {
			currentTime: null
		}
	}


	componentDidMount()
	{
		axios.get(CONF_API_EP_SERVER_TIME).then((data) =>
		{
			this.setState({
				currentTime: data.data.data.time
			})
		});
	}

	render()
	{
		return <React.Fragment>
			{this.state.currentTime ? (
				"Server time from API endpoint is " + this.state.currentTime
				) : "loading"
			}
		</React.Fragment>
	}
}