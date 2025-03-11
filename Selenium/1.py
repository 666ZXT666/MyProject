# 导入所需的库
from selenium import webdriver  # 导入Selenium浏览器自动化库
from selenium.webdriver.common.by import By  # 导入定位元素的方法
from selenium.webdriver.edge.service import Service  # Edge浏览器服务
from webdriver_manager.microsoft import EdgeChromiumDriverManager  # Edge驱动管理器
import time  # 用于添加延时
from selenium.webdriver.support.ui import WebDriverWait  # 显式等待
from selenium.webdriver.support import expected_conditions as EC  # 期望条件
from selenium.webdriver.common.keys import Keys  # 键盘按键操作
import pandas as pd  # 数据处理库
from selenium.common.exceptions import NoSuchElementException  # 元素未找到异常
import random  # 用于添加随机等待时间
import requests  # 用于下载图片
import os  # 用于创建目录和保存文件


# 配置Edge浏览器
options = webdriver.EdgeOptions()
# 禁用自动化控制特征，降低被检测风险
options.add_argument("--disable-blink-features=AutomationControlled")
# 排除自动化开关，进一步降低被检测风险
options.add_experimental_option("excludeSwitches", ["enable-automation"])
# 设置Edge驱动
service = Service(EdgeChromiumDriverManager().install())
# 初始化浏览器实例
driver = webdriver.Edge(service=service, options=options)

try:
    # 打开小红书搜索页面
    driver.get("https://www.xiaohongshu.com/search_result?keyword=%E7%AD%BE%E8%AF%81&source=web_explore_feed")
    time.sleep(0.5)  # 原为5秒
    
    # 等待用户手动扫码登录
    input("请扫码登录后按回车继续...")
    driver.refresh()
    time.sleep(0.5)  # 原为3秒
    
    # 设置隐式等待时间
    driver.implicitly_wait(0.5)  # 原为10秒
    
    # 存储所有数据，使用集合去重
    collected_titles = set()  # 用于去重的标题集合
    data_list = []  # 存储完整数据
    
    try:
        # 打印当前页面位置
        print(f"当前页面滚动位置: {driver.execute_script('return window.pageYOffset;')}")
        
        visible_items = driver.find_elements(By.CLASS_NAME, "note-item")[:12]
        print(f"找到的元素数量: {len(visible_items)}")
        
        for item in visible_items:
            try:
                # 检查元素是否在可视区域内
                is_visible = driver.execute_script("""
                    var elem = arguments[0];
                    var rect = elem.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                """, item)
                print(f"元素是否在可视区域内: {is_visible}")
                
                # 尝试获取元素位置信息
                location = item.location
                size = item.size
                print(f"元素位置: {location}, 元素大小: {size}")
                
                # 改进后的标题获取方式（增加存在性检查）
                title_elements = item.find_elements(By.CSS_SELECTOR, 'a.title span')
                if not title_elements:
                    print("未找到标题元素，可能为广告项，跳过")
                    continue
                title = title_elements[0].text
                
                # 更安全的昵称获取方式
                nickname_elements = item.find_elements(By.CLASS_NAME, 'name')
                nickname = nickname_elements[0].text if nickname_elements else "未知用户"
                
                # 改进后的点赞数获取（添加父级元素检查）
                try:
                    likes_container = item.find_element(By.CSS_SELECTOR, '.interactions .count')
                    likes = likes_container.text if likes_container else '0'
                except NoSuchElementException:
                    likes = '0'
                
                # 添加标题到已采集集合
                collected_titles.add(title)
                # 点击进入详情页
                try:
                    item.click()
                except Exception as e:
                    print(f"点击失败详细信息:")
                    print(f"- 异常类型: {type(e).__name__}")
                    print(f"- 异常信息: {str(e)}")
                    print(f"- 当前URL: {driver.current_url}")
                    # 截图保存
                    driver.save_screenshot(f"error_screenshot_{time.strftime('%Y%m%d_%H%M%S')}.png")
                    raise  # 重新抛出异常
                time.sleep(0.5)  # 原为0.5秒（保持不变）
                # 等待新路由加载完成
                WebDriverWait(driver, 0.5).until(  # 原为10秒
                    EC.url_contains("/explore/")
                )
                
                # 获取详情页内容
                try:
                    # 获取帖子描述
                    desc_element = WebDriverWait(driver, 0.5).until(  # 原为10秒
                        EC.presence_of_element_located((By.CSS_SELECTOR, '#detail-desc .note-text'))
                    )
                    description = desc_element.text.replace('\n', ' ').strip()
                    
                    # 获取图片链接
                    img_elements = driver.find_elements(By.CSS_SELECTOR, '.img-container img')
                    images = [img.get_attribute('src') for img in img_elements if img.get_attribute('src')]
                    
                    # 新增图片保存逻辑
                    local_paths = []
                    for idx, url in enumerate(images):
                        try:
                            response = requests.get(url, stream=True)
                            filename = f"images/{title[:20]}_{idx}.jpg"  # 创建images目录存放图片
                            os.makedirs('images', exist_ok=True)
                            with open(filename, 'wb') as f:
                                for chunk in response.iter_content(1024):
                                    f.write(chunk)
                            local_paths.append(filename)
                        except Exception as e:
                            print(f"图片下载失败: {str(e)}")
                            local_paths.append("下载失败")
                    
                except Exception as e:
                    print(f"详情页数据获取失败: {str(e)}")
                    description = "获取失败"
                    images = []
                
                # 保存数据
                data_list.append({
                    '发布人昵称': nickname,
                    '点赞数': likes,
                    '帖子标题': title,
                    '帖子描述': description,
                    '图片链接': images
                })
                
                print(f"已采集 {len(data_list)} 条 - {title}")
                
                # 返回搜索结果页
                driver.back()
                WebDriverWait(driver, 0.5).until(  # 原为10秒
                    EC.url_contains("search_result")
                )
                time.sleep(0.5)  # 原为0.3秒
                
            except Exception as e:
                print(f"处理单个item异常: {str(e)}")
                # 如果在详情页，需要返回
                if "explore" in driver.current_url:
                    driver.back()
                    time.sleep(0.5)  # 原为2秒
                continue
        
    except Exception as e:
        print(f"外层循环异常: {str(e)}")
        # 刷新页面恢复状态
        driver.refresh()
        time.sleep(0.5)
    
    # 将数据保存到Excel文件
    df = pd.DataFrame(data_list)
    df.to_excel('小红书搜索结果.xlsx', index=False, engine='openpyxl')
    print("数据已保存到 小红书搜索结果.xlsx")

finally:
    # 无论是否出现异常，都确保关闭浏览器
    driver.quit()