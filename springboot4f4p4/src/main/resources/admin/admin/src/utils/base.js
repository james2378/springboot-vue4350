const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4f4p4/",
            name: "springboot4f4p4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4f4p4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家具网站"
        } 
    }
}
export default base
