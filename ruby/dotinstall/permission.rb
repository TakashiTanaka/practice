# アクセス権
# public / protected / private:レシーバーを指定できない

class User

	def sayHi
		puts "hi"
		# 意味的にはself.sayPrivateだがレシーバーが指定できないので
		# sayPrivateとなる
		sayPrivate
	end
	
	private
	
		def sayPrivate
			puts "private"
		end

end

class AdminUser < User

	# サブクラスからもprivateメソッドが使える
	def sayHello
		puts "hello"
		sayPrivate
	end

	# サブクラスからもprivateメソッドをオーバーライドできる
	def sayPrivate
		puts "private from Admin"
	end

end

# User.new.sayPrivate これはできない

User.new.sayHi
AdminUser.new.sayHello