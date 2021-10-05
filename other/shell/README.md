# シェルスクリプトの勉強

## !/bin/bash
1行目にコマンドを実行するためのプログラムを指定する
j!の後に書いていく。bashを使いたい場合、
`which bash`でbashのパスを表示し、それをコピペする
<br>

## `echo`
改行付きで値を表示する
""や''で文字列を囲むことで半角スペースなども文字列として表現できる
```
echo "hello"
```
<br>

## 連続して命令を書くには改行か、;で命令をつなげる
```
echo "foo"; echo "bar"
```
<br>

## コメントアウト
#を行頭につけると行末までがコメントアウトされる
<br>

## 変数に値を代入
変数を代入するときは=の前後にスペースを入れないように注意する
```
name=fkoji
```
<br>

## 変数を取り出す
変数名の前に`$`をつける。また、`${val}`としても良い
`''`の中では変数が展開されない
```
echo "$name"
echo "${name}さん"
echo 'echo ${name}さん' ←これはエラーになる
```
<br>

## readonly
変数代入時に`readonly`とつけると、読み取り専用になって値を再代入できなくなる
`readonly color=red`
<br>

## 特殊変数
`$1,$2...`
スクリプト実行時に引数として渡した値が代入される
./hello Tomで実行するとMy name is Tomとなる
```
echo "My name is $1"
```

`$0`はスクリプト名
`$#`は引数の数
`$@ or $*`はすべての引数
./hello a aa aaaで実行すると、./hello 3 a aa aaaと表示される
```
echo $0
echo $#
echo $@
```

## read
ユーザーからの入力を受け付ける
read 変数名とすることで入力された値を変数に代入できる
```
read username
echo "hello $username"
```

また、入力を促す際に-p（プロンプトオプション）をつけることで文字列を表示することができる
```
read -p "Please enter your name" username
echo "hello $username"
```

readで複数の値を受け取ることもできる
```
read -p "Pick 3 colors: " c1 c2 c3

echo $c1
echo $c2
echo $c3
```
<br>

## 配列を代入する時は値を()で囲む
値の区切りには半角スペースをいれる
```
colors=(red blue pink)
```
<br>

## 配列の値を取り出す時は${配列名[添字]}
```
echo ${colors[0]} #red
echo ${colors[1]} #blue
echo ${colors[2]} #pink
```
<br>

## @を入れると配列内の全ての値が取り出せる
```
echo ${colors[@]} #red blue pink
```
<br>

## \#をつけると配列の要素数が取り出せる
```
echo ${#colors[@]} #3
```
<br>

## 配列名[添字]=値で位置を指定して代入できる
```
colors[1]=silver
```
<br>

## 配列の末尾に値を追加したい場合は+=
```
colors+=(green orange)
```
<br>

## bashでは基本的に値は文字列として認識される
```
echo 5+2
```
<br>

## ``内でexprコマンドを使う
```
echo `expr 5 + 2`
```
<br>

## $(())を使う
```
echo $((5 + 2))
```
<br>

## (())内で変数を取り出す時は$は不要
```
n=5
((n=n+5))
echo $n
```
<br>

## bashは基本的に整数の演算
```
echo $((10 / 3))
```
<br>

## 条件分岐
## userに名前を入力してもらってその値で条件分岐する
read -p "Name?" name

## if test 条件で条件分岐することができる
## if test "$name" = "taguchi"

## また、testではなく[]で囲む方法でも良い
## ただ、[の後、]の前に半角スペースを必ず入れなければならない
## if [ "$name" = "taguchi" ]
## then #thenでtrueだった時の挙動を指定する
## 	echo "welcome"
## elif [ "$name" = "fkoji" ] #elifでその他の条件を指定する
## then
## 	echo "welcome, too"
## else #上記の条件に当てはまらなかった時の挙動を指定する
## 	echo "you are not allowed"
## fi #fiでif文を終了する

## 上記と同じ動作をするが、thenを条件式の後に繋げて書いているパターン
if [ "$name" = "taguchi" ]; then
	echo "welcome"
elif [ "$name" = "fkoji" ]; then
	echo "welcome, too"
else
	echo "you are not allowed"
fi

## 文字列の比較は[[]]
## 数値の比較は(())

## 使える演算子は= == != -z =~

## -zは文字列が空かどうか
if [[ -z $name ]]; then
 echo "empty..."
fi

## -~は正規表現
name=tanaka

if [[ $name =~ ^t ]]; then
 echo "start with t..."
fi

## -e 種類を問わず、存在しているか
## -f ファイルが存在しているか
## -d ディレクトリが存在しているか

## 実行しているファイルが存在しているか
if [[ -f $0 ]]; then
	echo "file exists ..."
fi

## 実行しているファイルがディレクトリかどうか（これは必ずfalseとなる）
if [[ -d $0 ]]; then
	echo "dir exists ..."
fi

## 数値演算の時は(())を使う
## 使える比較演算子は == != > >= < <=

## ユーザーからの数値入力で条件分岐する
read -p "Number? " n
if((n > 10)); then
	echo "bigger than 10"
fi

## 使える論理演算子は && || !

for i in 1 2 3 4 5

## 単純な繰り返しだったらブレース展開できる
for i in {1..5}; do
	echo $i
done

## (())で指定することもできる
for ((i=1; i<=5; i++)); do
	echo $i
done

## 配列走査
```
colors=(red blue pink)
for color in ${colors[@]}; do
	echo $color
done
```
<br>

## コマンドの実行結果を利用する
```
for item in $(date); do
 echo $item
done
```
<br>

## while
```
i=0
while ((i < 10)); do
	((i++))
	echo $i
done
```
<br>

## continue, break
```
i=0
while ((i < 10)); do
	((i++))
	if ((i == 4)); then
		continue;
	fi
	if ((i == 8)); then
		break
	fi
	echo $i
done
```
<br>

## 無限ループ
cmdを受け付けて、quitだった場合は処理を抜ける
```
while :
do
	read -p "Command?" cmd
	if [[ $cmd == "quit" ]]; then
		break
	else
		echo "$cmd"
	fi
done
```
<br>

## テキストファイルを読みとってエコーする
```
i=1
while read line; do
	echo $i "$line"
	((i++))
done < colors.txt
```
<br>

## case
```
read -p "signal color?" color
case "$color" in
	red)
		echo "stop"
		;;
	blue|green)
		echo "go"
		;;
	yellow)
		echo "caution"
		;;
	*)
		echo "wrong signal"
esac
```
<br>

## select
```
select color in red blue yellow green; do
	case "$color" in
		red)
			echo "stop"
			;;
		blue|green)
			echo "go"
			;;
		yellow)
			echo "caution"
			;;
		*)
			echo "wrong signal"
			break
	esac
done
```
<br>

## function
```
hello() {
	echo "hello..."
	echo "hello... $1" # 引数を受け取る

	# 終了ステータスを返す
	if [[ $1 == "taguchi" ]]; then
		return 0
	else 
		return 1
	fi
}
```
呼び出し。()はいらない
```
hello
```
引数を与えて呼び出す
```
hello fkoji

hello taguchi; echo $?
hello fkoji; echo $?
```
<br>

## スコープ
```
hello(){
	local name="taguchi" # 変数にlocalをつけるとブロックスコープになる
	echo "hello..."
}

hello
echo $name
```