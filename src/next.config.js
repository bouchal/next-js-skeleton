export default {
	webpack: (config) =>
	{
		config.module.rules.push(
			{
				test: /\.(css|less)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.less$/,
				use: ['babel-loader', 'raw-loader', {
					loader: "less-loader", options: {
						strictMath: true,
						noIeCompat: true
					}
				}]
			}
		)
		return config
	}

}