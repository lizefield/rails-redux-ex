# README

* 出来るだけ最新の安定版パッケージを利用(2018/10/08時点)
* Redux(React)とAPIにフォーカスするためにDBは省略
* Redux(React)の構成は出来るだけ公式(react,flux,redux)に沿った形で作成し、分割出来るところまで分割
* 認証トークンとしてJWTをサンプル実装

## Versions

| package | version | url |
| :--- | :--- | :--- |
| ruby | 2.5.1 | https://www.ruby-lang.org/ja/ |
| rails | 5.2.1 | https://rubyonrails.org |
| bundler | 1.16.5 | https://bundler.io |
| node | 8.12.0 | https://nodejs.org/ja/ |
| npm | 6.4.1 | https://nodejs.org/ |
| yarn | 1.10.1 | https://yarnpkg.com/ |

| package | version | url |
| :--- | :--- | :--- |
| jwt | 2.1.0 | http://jwt.github.io/ruby-jwt/ |

| package | version | url |
| :--- | :--- | :--- |
| react | 16.5.2 | https://reactjs.org |
| react-dom | 16.5.2 | https://reactjs.org/docs/react-dom.html |
| redux | 4.0.0 | https://redux.js.org |
| react-redux | 5.0.7 | https://react-redux.js.org |
| redux-thunk | 2.3.0 | https://github.com/reduxjs/redux-thunk |
| react-router-dom | 4.3.1 | https://reacttraining.com/react-router/web/guides/philosophy |
| connected-react-router | 4.5.0 | https://github.com/supasate/connected-react-router |
| axios | 0.18.0 | https://github.com/axios/axios |

| package | version | url |
| :--- | :--- | :--- |
| webpack | 4.20.2 | https://webpack.js.org |
| webpack-cli | 3.1.2 | https://webpack.js.org/api/cli/ |
| babel-loader | 8.0.4 | https://github.com/babel/babel-loader |
| @babel/core | 7.1.2 | https://babeljs.io/docs/en/next/babel-core.html |
| @babel/plugin-proposal-object-rest-spread | 7.0.0 | https://babeljs.io/docs/en/next/babel-plugin-proposal-object-rest-spread.html |
| @babel/preset-react | 7.0.0 | https://babeljs.io/docs/en/babel-preset-react |

## Docker

git cloneしたディレクトリへ移動後に各コマンド実行  

### 起動

imageが無い場合はbuildも行われる  

```
docker-compose up -d
```

### コンテナ起動状態確認

```
docker-compose ps
```

### ログ確認

tail不要の場合は```-f```オプション省略

```
docker-compose tail -f
```

### コンテナ内コマンド実行

例えばrailsのログ確認の場合

```
docker exec -it rails-redux-ex tail -f log/development.log
```

## 補足

RailsはAPIモードで余計なものを省いて初期化

```
bundle exec rails new . -M -C -S -J -T -O --api
```

react-router-reduxがdeprecatedのためconnected-react-routerの利用  
https://github.com/reactjs/react-router-redux#readme  
https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux  

Flux  
https://facebook.github.io/flux/  

Presentational ComponentとContainer Componentsの分離  
https://redux.js.org/basics/usagewithreact  
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0  

JWT  
https://jwt.io  
