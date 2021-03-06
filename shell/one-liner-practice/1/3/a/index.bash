echo クロロエチルエチルエーテル | sed s/エ/メ/
# クロロメチルエチルエーテル

echo クロロエチルエチルエーテル | sed s/ルエチ/ルメチ/
# クロロエチルメチルエーテル

# gオプションをつけるとすべて置換
echo クロロメチルメチルエーテル | sed s/メ/エ/g
# クロロエチルエチルエーテル

# &を使うと検索対象の文字列を再利用できる
echo クロロエチルエーテル | sed 's/エチル/&&/'
# クロロエチルエチルエーテル

# -Eで拡張正規表現を使う指定。()で囲んだ文字を置換後の文字列のところで\1、\2のように呼び出すことができる。
# このような再利用方法は後方参照と呼ばれる
echo クロロメチルエチルエーテル | sed -E 's/(メチル)(エチル)/\2\1/'
#クロロエチルメチルエーテル