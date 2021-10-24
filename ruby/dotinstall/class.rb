# クラス

# クラス名は大文字から始める
class User

	def initialize(name) # initializeはjsでいうコンストラクタ
		@name = name # インスタンス変数には接頭辞@をつける
	end

	def sayHi
		puts "hi #{@name}" # インスタンス変数を利用する
	end

end

tom = User.new("tom") # Userクラスのインスタンス、tomを作る
tom.sayHi

bob = User.new("bob") # Userクラスのインスタンス、bobを作る
bob.sayHi