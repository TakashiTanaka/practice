# while
# 条件を指定して、繰り返し処理ができる

i = 0

while i < 10 do
	puts "#{i}: hello"
	i += 1
end

# times
# 回数を指定して、繰り返し処理ができる
# iはインクリメントされる一時変数||で囲む
10.times do |i|
	puts "#{i}: hello"
end

# doとendを{}で置き換えることができる
# 上記と同じ挙動となる
10.times {|i| puts "#{i}: hello"}