# sed

テキスト処理ツール

-eはexpressionの意味
sed -e '3d' names.txt

上書きしたい場合は-iをつける
また、バックアップファイルを作成したい場合は.bakをつける
sed -i.bak'3d' names.txt

処理の内容を別ファイルに書いて読み込んで実行する場合は
-fオプションを付ける（下の例はex1.sedが処理内容を書いたファイル）
sed -f ex1.sed names.txt

用語
sed '3d' name.txt
address（どの行に）とcommand（何をするか）のペアになっている
3行目をd（delete）する

パターンスペースという概念を使って処理をしている

アドレスの指定

3!d 三行目以外
1d;3d 1行目と3行目
1,3d 1から3行目
1~2d 1行目からひとつとばし
$d 最後の行
3,$d 3行目から最終行

最後がiで終わる行を削除
sed '/i$/d' names.txt

コマンド

p print
sed '3p' names.txt

-nオプション
sed -n '3p' names.txt

q quit
sed '3q' names.txt

i insert（gnu-sedを入れないとエラーが出てしまったhttp://www.absolute-keitarou.net/blog/?p=586）
1行目の前にinsert
sed '1i\--- start ---' names.txt

a append
行の最後にappendする
sed -e '1i\--- start ---' -e '$a\--- end ---' -e '/^$/d' names.txt



