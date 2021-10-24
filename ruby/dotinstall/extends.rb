# クラスの継承

class User

	def initialize(name)
		@name = name
	end

	def sayHi
		puts "hi #{@name}"
	end

end

# User: 親クラス、Super Class
# AdminUser: 子クラス、Sub Class
# < でクラスの継承が可能
class AdminUser < User

	def sayHello
		puts "hello from #{@name}"
	end

	# メソッドのオーバーライドも可能
	def sayHi
		puts "hi from admin"
	end

end

tom = AdminUser.new("tom")
tom.sayHi
tom.sayHello