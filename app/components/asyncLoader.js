const { Promise } = global;

export default (componentPath) => {
	return new Promise(resolve => {
		require.ensure([], () => {
			require(componentPath);
			resolve();
		});
	});
};
