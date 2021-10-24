# アクセサ

class User

	# attr_accessor シンボル名 でアクセサーを設定する
	# これで外部から値の設定・取得ができるようになる
	attr_accessor :name

	# attr_reader シンボル名 でリーダーを設定する
	# アクセサーとは異なり、getterで値の取得のみとなる
	# attr_reader :name

	def initialize(name)
		@name = name
	end

	def sayHi
		# self
		# selfはそのメソッドを受け取っているインスタンス自身を指す
		puts "hi #{@name}"
		# puts "hi #{self.name}" # 結果として@nameが取得できる
		# puts "hi #{name}" # self.nameの省略形
	end

end

tom = User.new("tom")
tom.sayHi # メソッドを受け取っているオブジェクトのことをレシーバーと呼ぶ

tom.name = "tom Jr."
p tom.name