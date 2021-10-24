# クラスメソッド、クラス変数、クラス定数
# クラスから直接呼ぶことのできるメソッドや変数のこと

class User

	# @@をつけることでクラス変数を定義することができる
	@@count = 0

	# クラス定数は頭文字を大文字にする。慣習的に全て大文字することが多い
	VERSION = 1.1

	def initialize(name)
		@@count += 1
		@name = name
	end

	def sayHi
		puts "hi #{@name}"
	end

	# クラスメソッドはselfをつけることで作れる
	def self.info
		puts "#{VERSION}: User class, #{@@count} instances."
	end

end

tom = User.new("tom")
bob = User.new("bob")
steve = User.new("steve")

User.info
p User::VERSION # クラス定数にアクセスする場合は::をつけてアクセスする