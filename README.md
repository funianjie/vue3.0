# vue3_study

### 说明
1. cross-env

- cross-env这是一款运行跨平台设置和使用环境变量的脚本。
- 在npm脚本中使用方式，可根据需要配置多个参数：
```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production PROJECT_NAME=qlfz webpack --config vue-cli-service serve"
  }
}
```
- 参数说明
```javascript
// 开发环境参数
NODE_ENV=production 
// 项目参数
PROJECT_NAME=qlfz
```
