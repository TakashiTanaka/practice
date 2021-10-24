# loop
# 永遠に処理を繰り返す

# i = 0
# loop do
# 	p i
# 	i += 1
# end

# break
# 処理を途中で抜ける

10.times do |i|
	if i == 7
		break
	end
	p i
end


# next
# 処理をスキップする
# jsでいうところのcontinue

10.times do |i|
	if i == 7
		next
	end
	p i
end