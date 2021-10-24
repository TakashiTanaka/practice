# コメント

=begin
コメント
コメント
コメント
=end

print "hello world"
puts "hello world2" # 改行がつく
p "hello world3" # デバッグ用

# 変数
# 命名は頭文字を英小文字か_で始める
# 値の変更が可能
msg = "hello world"
puts msg

msg = "hello world again"
puts msg

# 定数
# 頭文字が英大文字でないとだめ
# 慣習的にすべて英大文字にすることが多い
# 値を変更可能だが、警告が出る
VERSION = 1.1
puts VERSION