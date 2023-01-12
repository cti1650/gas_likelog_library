# GAS Clasp Template

## 目的

GASでスクリプトを作成するにあたり都度設定していた内容をすぐに使い始めれるようにテンプレート化し開発の効率化を図る

## 開発方法

詳細は[Document](https://developers.google.com/apps-script/guides/clasp)を参照

[claspを使ってGoogle Apps Scriptの開発環境を構築してみた | DevelopersIO](https://dev.classmethod.jp/articles/vscode-clasp-setting/)  
[GASをgit管理したいので、Clasp環境を作る](https://zenn.dev/marusho/scraps/3579309aabf5eb)  




### ログイン

```
clasp login
```

### 既存スクリプトをcloneする

```
clasp clone {scriptId}
```

### GAS を開く

```
clasp open
```

### スクリプトをpushする

```
clasp push
```

### スクリプトをpullする

```
clasp pull
```

### 状況確認

#### バージョン一覧

```
clasp versions
```

#### デプロイ一覧

```
clasp deployments
```

### 更新処理

#### 新規バージョン発行

```
clasp version "new version"
```