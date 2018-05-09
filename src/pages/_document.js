/**
 * Base server side skeleton of Next.js rendered document.
 * You can add here some tracking codes or working with variables passed from router (for example `props.query.urlKey`),
 * but it will we only on server side of rendering.
 */

import Document, {Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";
import stylesheet from "../styles/less/default.less";

export default class MyDocument extends Document {
	static getInitialProps({renderPage})
	{
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return {
			...page,
			styleTags
		}
	}

	render()
	{
		return (
			<html>
			<Head>
				<meta name="viewport" content="width=device-width, minimum-scale=1"/>
				<title>Next.JS SSR skeleton</title>

				<style dangerouslySetInnerHTML={{__html: stylesheet}}/>
				{this.props.styleTags}
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		)
	}
}