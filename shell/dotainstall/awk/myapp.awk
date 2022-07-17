# 4番目のフィールドを出力
# awk -f myapp.awk scores.dat
{
  # {}はすべてのレコードに対して処理を行う
  # printはデータの出力
  # $4は4番目のフィールド
  # 簡単な処理だったらプログラムファイルを作らなくてもコマンドで直接実行してもok
  # awk '{ print $4 }' scores.dat
  # print $4 # comment
}

# 複数のフィールドを指定したい場合、カンマで区切って記述
# 半角スペースで区切って出力される
{
  # print $3,$4
}

# 特定の文字列で連結して出力したい場合、""内に文字列を記述
{
  # print $3 ":" $4
}

# $0はすべてのフィールドを意味する
{
  # print $0
}

# NF（Number of Fields）
# フィールドの数が格納されている変数
# $NFとすると最後のフィールドを指定できる
{
  # print NF, $NF
}

# NR（Number of Records）
# レコードの番号を表示してくれる
{
  # print NR ":" $0
}

# 特定のレコードを処理
# {}の前に条件を記述するとその条件にマッチしたレコードだけが処理される。この条件をパターンという
# また、{}内の処理のことをアクションという
# 使える比較演算子 < > <= >= == != ~ !~
# 使える論理演算子 && || !

# NR < 3 {
#   print NR ":" $0
# }
# NR > 95 {
#   print NR ":" $0
# }


# 複数の条件を組み合わせた例
# ($3 == "taguchi") && ($4 > 100) {
#   print NR ":" $0
# }

# 正規表現を使った例（3番目のフィールドがtから始まるレコード）
# $3 ~ /^t.*/ {
#   print $0
# }

# BEGIN, END
# BEGINは最初に行う処理、ENDは最後に行う処理
# BEGIN {
#   print "--- START ---"
# }
# NR > 5 && NR < 10 {
#   print $0
# }
# END {
#   print "--- END ---"
# }

# FS（Field Separator）
# フィールドをどの文字で区切るかを指定できる（デフォルトはスペース）
# BEGIN {
#   FS = "-"
# }
# NR > 5 && NR < 10 {
#   print $1, $2
# }

# RS（Record Separator）
# レコードをどの文字で区切るかを指定できる（デフォルトは改行文字）
# BEGIN {
#   RS = ":"
# }
# NR == 1 {
#   print $0
# }

# OFS, ORS
# OFS（Output Field Separator）
# ORS（Output Record Separator）
# 出力するときのフィールドとレコードの区切り文字を指定できる
# BEGIN {
#   OFS = "@"
#   ORS = "|"
# }
# NR > 5 && NR < 10 {
#   print $3, $4
# }

# 変数・演算子
# BEGIN {
#   total = 0
# }
# NR < 4 {
#   total += $4
# }
# END {
#   print total
# }

# printf
# 書式を整形して出力する
# %を使って値を埋め込むことができる
# %sはstring（文字列） %dはdigit（整数） %fはfloat（浮動小数点数） 
# またprintfの場合改行されないので改行したい場合は\nを記述する
# %と型の間に数値を入れると桁を指定できる
# また、%の後に-を入れると左揃え、0を入れると余ったところが0でうまる、'を入れると100のくらいでカンマがはいる
# NR > 96 {
#   # print $3, ($4+$5+$6+$7), (($4+$5+$6+$7)/4)
#   # printf "Name: %s Sum: %d Avg: %f\n", $3, ($4+$5+$6+$7), (($4+$5+$6+$7)/4)
#   printf "Name: %-10s Sum: %'10d Avg: %010.2f\n", $3, ($4+$5+$6+$7), (($4+$5+$6+$7)/4)
# }

# 組み込み関数
# BEGIN {
#   print int(3.8) #3
#   print length("hello") #5
#   print substr("hello", 3) #llo
#   print substr("hello", 3, 2) #ll
# }

# ifを使った条件分岐
# NR < 31 {
#   print NR ":" $0
#   if(NR % 10 == 0) {
#     print "-----"
#   } else if (NR % 5 == 0) {
#     print "---"
#   } else {
#     print "-"
#   }
# }

# whileでくりかえし処理
# dowhileも使える
# NR < 4 {
#   sum = 0
#   i = 4
#   while (i <= 7){
#     sum += $i
#     i++
#   }
#   printf "Name: %-10s Sum: %'10d\n", $3, sum
# }

# for, continue, break
# continueは処理をスルー
# breakは処理を終了
# NR < 4 {
#   sum = 0
#   for (i = 4; i <= 7; i++) {
#     if ($i < 100){
#       # continue
#       break
#     }
#     sum += $i
#   }
#   printf "Name: %-10s Sum: %'10d\n", $3, sum
# }

# 配列
# awkでは添字は1から始めるのが普通
# BEGIN {
#   # ranks[1] = "Gold"
#   # ranks[2] = "Silver"
#   # ranks[3] = "Bronze"

#   # splitで配列を作ることもできる
#   split("Gold Silver Bronze", ranks)

#   # 取り出すには添字を指定
#   print ranks[1]

#   # 書き換えも可能
#   ranks[2] = "Plata"
#   print ranks[2]

#   # 処理を強制終了するにはexitを使う
#   exit
# }

# 配列をforで処理する
# BEGIN {
#   split("Gold Silver Bronze", ranks)
#   print "Available Ranks: "
#   for(i = 1; i <= length(ranks); i++) {
#     print ranks[i]
#   }
#   print "------"
# }
# NR < 4 {
#   sum = 0
#   for (i = 4; i <= 7; i++) {
#     sum += $i
#   }
#   if(sum > 1000) {
#     rank = ranks[1]
#   } else if(sum > 800) {
#     rank = ranks[2]
#   } else {
#     rank = ranks[3]
#   }
#   printf "Name: %-10s Sum: %'10d Ranks: %-10s\n", $3, sum, rank
# }

# 関数を自分で作ってみる
# NR < 4 {
#   sum = getSum()
#   rank = getRank(sum)
#   printf "Name: %-10s Sum: %'10d Ranks: %-10s\n", $3, sum, rank
# }

# function getSum() {
#   sum = 0
#   for (i = 4; i <= 7; i++) {
#     sum += $i
#   }
#   return sum
# }

# function getRank(sum) {
#   split("Gold Silver Bronze", ranks)
#   if(sum > 1000) {
#     rank = ranks[1]
#   } else if(sum > 800) {
#     rank = ranks[2]
#   } else {
#     rank = ranks[3]
#   }
#   return rank
# }

# 連想配列
# 添字に文字列を使うこともできる
# 集計処理の時によく使われう手法として、添字にレコード内の文字列（名前など）を利用することがよくある
# {
#   sum = getSum()
#   total[$3] += sum
# }
# END {
#   for (name in total) {
#     printf "Name: %-10s Total: %'10d\n", name, total[name]
#   }
# }

# function getSum() {
#   sum = 0
#   for (i = 4; i <= 7; i++) {
#     sum += $i
#   }
#   return sum
# }

# function getRank(sum) {
#   ranks["first"] = "Gold"
#   ranks["second"] = "Silver"
#   ranks["third"] = "Bronze"
#   if(sum > 1000) {
#     rank = ranks["first"]
#   } else if(sum > 800) {
#     rank = ranks["second"]
#   } else {
#     rank = ranks["third"]
#   }
#   return rank
# }

# グラフをかく
# {
#   sum = getSum()
#   total[$3] += sum
# }

# END {
#   for (name in total) {
#     printf "Name: %-10s Total: %'10d %s\n", name, total[name], getBarGraph(total[name])
#   }
# }

# function getBarGraph(total) {
#   s = ""
#   for(i = 1; i <= int(total/1000); i++) {
#     s = s "*"
#   }
#   return s
# }

# function getSum() {
#   sum = 0
#   for (i = 4; i <= 7; i++) {
#     sum += $i
#   }
#   return sum
# }
