# if
# > < >= <= == !=
# && || !

# getsはユーザーの入力を受け付ける命令
# to_iで整数値に変換している
score = gets.to_i

# if, elsif, else, end
if score > 80
	puts "great!"
elsif score > 60
	puts "good!"
else
	puts "so so ..."
end

# ifを後ろに書く書き方もある
puts "great" if score > 80