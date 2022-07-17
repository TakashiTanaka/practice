# getoptの練習

オプション解析

getoptsコマンドとは違う
getoptだとロングオプション`--`も解析可能
ただmacOSだとBSD版が収録されているようで、
BSD版だと空白や特殊記号を含む引数をうまく扱えないという問題がある。
getoptsコマンドはロングオプションが解析できないが、Bashのビルトインコマンドなので、
様々なOSで汎用的に使用できるメリットがある。

GNU版をインストールしたい`brew install gnu-getopt`（https://formulae.brew.sh/formula/gnu-getopt）
