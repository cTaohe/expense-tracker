# 家庭記帳本

網路記帳程式，使用帳號登入，擁有個人隱私的支出記帳，記錄每日花費。

## 環境與需求
- windows 10
- bcryptjs: ^2.4.3
- body-parser: ^1.19.0
- connect-flash: ^0.1.1
- express: ^4.17.1
- express-handlebars: ^3.1.0
- express-session: ^1.16.2
- express-validator: ^6.1.1
- method-override: ^3.0.0
- mongoose: ^5.6.3
- nodemon: ^1.18.10
- passport: ^0.4.0
- passport-local: ^1.0.0

## 下載、安裝

```
git https://github.com/cTaohe/expense-tracker.git
cd /expense-tracker
npm install
node models/seeds/seed.js
```

## .env
在專案底下新增 .env ， 在 `facebook developer`、 `console google developer` 註冊新應用程式取得 client ID 以及 client secret。
```
FACEBOOK_ID= //your Client ID
FACEBOOK_SECRET= //your Client secret
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
GOOGLE_ID= //your Client ID
GOOGLE_SECRET= //your Client secret
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback
```

## 執行
專案資料夾下
```
npm run dev
```

## 種子帳號
user1
- email:user1@example.com
- password:12345678

user2
- email:user2@example.com
- password:12345678

## Heroku
[heroku 連結](https://radiant-waters-44650.herokuapp.com/users/login)

## 結構

|名稱|說明|
|---|---|
|app.js|應用程式管理檔案|
|package-json|檔案管理安裝路徑|
|views|template|
|routes/auth.js|第三方登入路由|
|routes/home.js|主畫面路由|
|routes/record.js|record路由|
|routes/user.js|使用者註冊登入路由|
|public/stylesheets/main.css|主要CSS|
|public/stylesheets/login.css|登入CSS|
|public/javascript|bootstraps需求JS|
|models/seeds/seed.js|產生種子檔案 js|
|models/record.js|資料產生格式|
|models/user.js|使用者資料產生格式|
|config/auth.js|登入檢查|
|config/passport.js|登入檢查|

## 圖片

![image](https://lh3.googleusercontent.com/ZvsPbLWRRHaullgEVLL09NUF7qIeCIPwlvWVB4YU5chKwO2twxej8RlvmSZCYunH_jpXfV8LFaoBUe5SMfaT2e_xA85Q86HdSfNBvbjYgmPJQy8tSHoOof3EsOgY8EeYyedOMow7rjfZKKZiYtl7rH0lyN1d1R53d4xpnnOaqPr7c7eD7dJkImLV14qYyGh2VkcK-m2UZF1ayqEuq3xMMYNcIMS0XlFpSVUIxEE7mItB1C3OfxBGOxIDFfArbticTEeDFll_OHVX_TMHd37jWbLUi_KkJVa6BdQgScbE-YoJQhXTlDKPAxhp4Uw_DoFtnFZojOrYFXQGcxZL0bsBDO17jzW7NSxh-19UPUF2mvIW7ZJRk-b5U2Ek8wQq2J8Z3bRaTOUW49mG7pF5hhiTA3nyIuGpAy4G08FpbtwD3tE9S7TxH0rlBUOPXCaYIjgrbFsJYThOitVQHReFkNr19TDF3EAuyE51bGn9vuaGKdU3ufsUEf0E_H7lT05zVM68PSuviFCqONDrEFrRwQwH-rkHCbMSMDyN8prg0KJaFchN3N7t990yOco0b7cfw2oEHA4LTkAKu77_1KzR25JviWZqNg-kXsPz2ECA_BGlszbd6nqJdnbABhgL7ujH3if7Pe3_dxlkFMwT6D9vVNkHxuylO7nF39H0Y95hY6OO6JqbMz_cggmGy1UyyRNb5ZlNoOMki8p4M_ut_IzGLov80phi=w895-h969-no)
## 作者
- Tao
