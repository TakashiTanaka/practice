# 配列
colors = ["red", "blue", "yellow"]

p colors[0] # []の中は添字という
p colors[-1] # [-1]は末尾にアクセスできる
p colors[0..2] # ..で範囲を指定できる
p colors[0...2] # 0-2の直前までという意味になる
p colors[5] # 範囲外の添字を入力するとnilが返ってくる

colors[0] = "pink" # 値の代入
colors[1..2] = ["white", "black"] # 範囲でまとめて代入
colors.push("gold") # 末尾に要素を追加
colors. << "silver" # pushの省略形
p colors

p colors.size # 要素の数をかえす
p colors.sort # 要素の並び替え