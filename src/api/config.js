// jsonp的公用参数配置

export const commonParams = {
	// g_tk: 1928093487,
	g_tk: 842764721,
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	format: 'jsonp'
}

export const options = {
	// 跟QQ接口保持一致
	param: 'jsonpCallback'
}

// 所有的接口正确返回值，都有一个code=0，配置一个常量，语义化更强
export const ERR_OK = 0
