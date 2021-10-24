# module
# 名前空間として使う方法
# 名前空間を使用することでメソッド名の衝突を避ける

# モジュール名の一文字目は必ず大文字
module Movie

	VERSION = 1.1

	def self.encode
		puts "encoding..."
	end

	def self.export
		puts "exporting..."
	end

end

Movie.encode
Movie.export
p Movie::VERSION