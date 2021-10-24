# for
# 集合的なオブジェクトの要素数、処理を繰り返す
# jsでいうfor in, for of的なもの

for i in 15..20
	p i
end

for color in ["red", "blue"]
	p color
end

for name, score in {taguchi: 200, fkoji: 500}
	p "#{name}: #{score}"
end

# each
# jsでいうforEach的なもの

(15..20).each do |i|
	p i
end

["red", "blue"].each do |color|
	p color
end

{taguchi: 200, fkoji: 500}.each do |name, score|
	p "#{name}: #{score}"
end

# do, endは{}で置き換えることができる

(15..20).each {|i| p i}

["red", "blue"].each {|color| p color}

{taguchi: 200, fkoji: 500}.each {|name, score| p "#{name}: #{score}"}