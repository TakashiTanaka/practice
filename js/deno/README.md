# Deno

Denoを試してみる

## インストール

`brew install deno`

## バージョンを確認

`deno -V`

## 実行

### 公式のサンプルを実行

`deno run https://deno.land/std/examples/welcome.ts`

### 公式のサンプル2を実行

`serve.js`というファイルを作って実行する

```JavaScript:serve.js
import { serve } from 'https://deno.land/std@0.117.0/http/server.ts';

console.log('http://localhost:8000/');
serve(req => new Response('Hello World\n'), { addr: ':8000' });
```

`deno run --allow-net serve.js`

