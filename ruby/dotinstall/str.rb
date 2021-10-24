# 文字列
# "" 特殊文字・式展開ができる
# ''

# ""の場合は特殊文字が使える
puts "hello\no worl\td"
puts 'hello\no worl\td'

# ""の場合は式展開ができる
puts "price #{3000 * 4}"
puts 'price #{3000 * 4}'

# ""の場合は変数の値を埋め込める
name = "taguchi"
puts "hello #{name}"

# +で文字列を連結
puts "hello " + "world"

# * で繰り返し
puts "hello" * 10 
