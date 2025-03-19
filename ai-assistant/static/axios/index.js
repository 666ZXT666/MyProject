function simpleAxios({baseURL = ''}){
    // 拦截器
    const interceptors = {
        request: [],
        response: []
    }
    // 推入拦截器
    function useRequestInterceptor(interceptor){
        interceptors.request.push(interceptor);
    }
    // 拦截器注册执行
    function executeInterceptors(interceptors, config){
        return interceptors.reduce((promise, interceptor) => {
            return promise.then(interceptor);
        }, Promise.resolve(config));
    }

    function sendRequest(method, url, data) {
        return executeInterceptors(interceptors.request, {method, url, data})
        .then(({method, url, data}) => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);//异步 || 同步
                if(method === 'POST'){
                xhr.setRequestHeader('Content-Type', 'application/json');
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(xhr.responseText);
                }
                else{
                    reject(xhr.statusText);
                }
                }
                xhr.send(JSON.stringify(data));
            });
        });
    }

    return {
        get(url){
            return sendRequest('GET', `${baseURL}${url}`);
        },
        post(url, data){
            return sendRequest('POST', `${baseURL}${url}`, data);
        },
        useRequestInterceptor(interceptor){
            interceptors.request.push(interceptor);
        }
    }
}

export default simpleAxios;