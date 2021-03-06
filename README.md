# 甜點電商網 Sweetaste*

[設計稿](https://www.behance.net/gallery/74192331/-PK-E-commerce-Web-Page) | [Demo 在這裡](https://sweetaste-allyouwantishere.herokuapp.com/)

## 流程和需求
1. 切版完成(done)
2. 會員驗證
    - 普通帳號密碼註冊、資料庫存取 (done)
    - 註冊須通過 recaptcha 機器人驗證 (in progress)
    - 串接 Facebook、google 登入
3. 寄送郵件
    - 和前面的會員驗證系統搭配，製作忘記密碼/重設密碼的功能
    - 訂閱電子郵件
4. 購物車功能
    - 商品頁、 model 建立 ( done )
    - 購物車 UI 介接

## 更動紀錄
- 2022/01/23 完成切版 (完成的時間大概是4天)
- 2022/06/29 加入 express router / 使用 ejs 改寫原本的 HTML & CSS 版型

## 說明
### 資料庫使用：
#### 甜點 (產品資料)
- 產品分三類：本日精選、人氣推薦、新品上市
- Schema: name, price, countInStock, category, imgUrl
- 輸入 ```npm run data:import``` 可以將更改過的甜點資料重新儲存到資料庫內
#### 會員
- bcrypt：將客戶端輸入的密碼雜湊後儲存

## 問題紀錄
### 切版上遇到的問題:
- 對於BS5的class使用還不夠熟悉(預設的 gutter, margin, padding 還需要更熟悉)
- 有些效果的製作可以考慮寫個筆記，記錄下來(時間軸、毛玻璃效果等)
- 大概寫到第三天之後覺得變得比較直覺，但是可以的話，還是希望先把版型的class都標示出來、想清楚

### 後端遇到的問題：
- 對路由的概念不是非常熟悉，但目前已經能理解使用 express 的方法。
- 對網址的組成不熟悉，但這部分還牽涉到 RESTful API 的觀念，透過實作會更加熟悉。