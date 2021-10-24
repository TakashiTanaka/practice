# 例外処理

# 自作のエラークラスを作成
class MyError < StandardError; end

# ユーザーの入力を受け付ける
x = gets.to_i

# エラーが起こる可能性のある処理をbeginの中に入れる
begin
	if x == 3
		raise MyError
	end
	p 100 / x
# rescueでエラーが起きた時の処理を書く
# こちらは自作のエラークラスをキャッチする（3を入力）
rescue => MyError 
	puts "not 3!"
# こちら標準のエラーオブジェクトをキャッチする（0を入力）
rescue => ex
	p ex.message
	p ex.class
	puts "stopped!"
# ensure内にはエラーの是非を問わず実行する処理を書く
ensure
	puts "-- END --"
end