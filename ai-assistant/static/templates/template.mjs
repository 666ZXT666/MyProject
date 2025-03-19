export async function loadTemplates() {
    const templates = {};
    
    // 加载聊天页面模板
    templates.home = await fetch('./templates/home.html')
        .then(response => response.text());
    
    templates.about = await fetch('./templates/about.html')
        .then(response => response.text());
    
    return templates;
}