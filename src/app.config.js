(function(angular) {
	angular.module('app')
	.constant('config', {
		base: 'https://api.mlab.com',
		prefix: '/api/1/databases/db_eliftech_test/collections',
		companies: '/companies',
		apiKey: '?apiKey=fy47MSM5Wn_pJcQAbdqNsDVEFd_svQZe',
		apiKeyWithParams: '&apiKey=fy47MSM5Wn_pJcQAbdqNsDVEFd_svQZe'
	});
})(angular);