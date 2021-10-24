# ハッシュ
# jsでいうところのオブジェクト型のようなもの

# キーと値を持ったオブジェクト
# scores = {"taguchi" => 200, "fkoji" => 200}

# キーをシンボルにする。:をつけるとシンボルになる
# scores = {:taguchi => 200, :fkoji => 200}

# 上記の書き方を更に省略した形。jsのオブジェクトリテラル的な書き方
scores = {taguchi: 200, fkoji: 200}

p scores[:taguchi] # 値へのアクセス
scores[:fkoji] = 600 # 値を再代入
p scores

p scores.size # ハッシュの要素数を返す
p scores.keys # キーを配列で返す
p scores.values # 値を配列で返す
p scores.has_key?(:taguchi) # 指定したキーが有るか