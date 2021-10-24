# module
# ミックスイン
# 継承関係にない複数のクラスに共通の機能を提供する

# Debugモジュールを定義
module Debug

	def info
		puts "#{self.class} debug info ..."
	end

end

class Player
	# debugモジュールを使うにはincludeで読み込む
	include Debug
end

class Monster
	include Debug
end

Player.new.info
Monster.new.info