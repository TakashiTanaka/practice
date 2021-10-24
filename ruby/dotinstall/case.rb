# case

# chompで最後の改行コードを取り除く
signal = gets.chomp

case signal
when "red"
	puts "stop"
when "green", "blue" # 複数の値を指定
	puts "go!"
when "yellow"
	puts "caution!"
else 
	puts "wrong signal"
end