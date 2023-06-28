# 短網址產生器

## 介紹

自行部屬的 Local 端短網址產生器

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 複製到 到本地端
3. 開啟終端機進入資料夾，輸入：
   ```
   npm install
   ```

4. 準備自己的MongoDB database，新增.env檔，輸入
  ```
  MONGODB_URI="你的URI字串"
  ```

4. 安裝完畢後，輸入以下開始：

   ```
   npm run dev
   ```

5. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
   ```
   Listening on http://localhost:3000
   ```

6. 停止使用
   ```
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 5.3.3
- MongoDB
- mongoose 6.0.5
