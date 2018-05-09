/**
 * Everything what you add in this exported object will be accessible in FE component under variable with name of KEY
 * of this value.
 *
 * Only limitation I know is that you can't add as value object, but only primitive types (string, int, bool).
 *
 * For example you can use it for pass endpoint path from server config.
 * In this example we pass environment name and use it in react component DefaultLayout.
 *
 * For this file doesn't work hot loader and you must reset whole application.
 *
 * For more information check https://github.com/FormidableLabs/babel-plugin-transform-define
 */

var config = require('./config');

module.exports = {
	CONF_ENV_NAME: config.envName,
	CONF_API_EP_SERVER_TIME: config.apiUriPrefix + '/server-time'
};