class Router{
    constructor(){
        this.routes = {};
        this.app = null;
        window.addEventListener('hashchange', this.handleHashChange.bind(this), false);
    }

    // 处理hash变化
    handleHashChange(){
        if(this.app) {
            this.load(this.app);
        }
    }

    load(app){
        this.app = app; // 保存app元素引用
        let hash = window.location.hash.slice(1) || '/home';
        let template = this.routes[hash];
        
        if(template) {
            app.innerHTML = template;
        } else {
            console.error(`路由 ${hash} 未找到`);
        }
    }

    register(hash, template){
        this.routes[hash] = template;
        return this;
    }
}

export default Router;