const ajax = (opt) => {
	// http://122.114.49.11:8090
	// http://192.168.3.2
    opt = opt || {};
    opt.url = opt.url || '';
    opt.data = JSON.stringify(opt.data || {});
    opt.method = opt.method || 'POST';
    opt.header = opt.header || {
        "Content-Type": "application/json",
    };
    opt.success = opt.success || function () {};
	opt.fail = opt.fail || function () {};
	console.log(opt.data)
    uni.request({
        url: 'http://m.xgcyz1978.com' + opt.url,
        data: opt.data,
        method: opt.method,
        header: opt.header,
		dataType: "json",
        success: function (res) {
            opt.success(res);
        },
        fail: function (res) {
			opt.fail(res)
            uni.showToast({
                title: '请稍后重试',
				icon: 'none'
            });
        }
    })
}

export {
    ajax
}