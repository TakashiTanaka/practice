# 自作のコンポーネントを作る

## Base COMPを設置

## Base COMP内にIn, Outを設置。再利用したいノードを組む

## 外出しのパラメーターを設定。Base COMPを右クリック、`Customize Component...`を選ぶ

Component Editorが開く

## PageとParameterを設定

名前を入力し、`Add Page`でPageを追加する。
その後、Parameterを設定する。

## Parameter CHOPで外出しのParameterの値を受け取る

Base COMPの中にParameter CHOPを作成。

## tox形式で保存する

Base COMP上で右クリックし、`Save Component...`を選択

## 呼び出せるようにする

My Components内にフォルダを作って作ったtoxを置く。
IDE上にドラッグ&ドロップしても何故か反映されなかったので、下記ディレクトリに入れたら反映された。
もしかしたらシンボリックリンクしとくと良い？

`~/Library/Application Support/Derivative/TouchDesigner099/Palette`

## 参考

<https://qiita.com/ToyoshiMorioka/items/4e6ba9981874f2d3975c>
