# メソッド
# jsで言うところの関数

# 引数にはデフォルト値を設定できる
def sayHi(name = "tom")
	score = 80
	puts "hi! #{name}"
end

# メソッドは最後に評価した値を返す
# 明示的に返したい場合はreturnを使う
def sayHi2(name = "tom")
	# "hi! #{name}"
	return "hi! #{name}"
end

sayHi("taguchi")

# ()を省略することもできる
sayHi "taguchi"
sayHi

p sayHi2
# p score # scoreはメソッド内で定義されている変数なのでアクセスができない