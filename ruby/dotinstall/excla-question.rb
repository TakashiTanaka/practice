# !
# upcase（文字列を大文字にしたものを返すメソッド）
# upcase!（文字列を大文字にしたものを返しつつ、元の文字列も大文字にする）
# !がついているメソッドは「破壊的なメソッド」という

name = "taguchi"
puts name.upcase
puts name
puts name.upcase!
puts name

# ? 真偽値 true false

name = "taguchi"
p name.empty?
p name.include?("g")