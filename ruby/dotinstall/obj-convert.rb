# オブジェクトの変換

x = 50
y = "3"

p x + y.to_i # yを整数型に
p x + y.to_f # yを浮動小数点型に
p x.to_s + y # xをを文字列型に

scores = {taguchi: 200, fkoji: 400}

p scores.to_a # scoresを配列に
p scores.to_h # scoresをハッシュ型に