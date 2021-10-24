# %

puts "hello"
puts %Q(hello) # "hello"と書いたのと同じ挙動になる
puts %(hello) # 更に短縮した形

puts 'hello'
puts %q(hello) # 'hello'と書いたのと同じ挙動になる

=begin
%の使い所としては、
"he\"llo"と書くと若干可読性が損なわれるが、
%(he"llo)と書ける。可読性が良い場合がある
=end

puts ["red", "blue"]
puts %W(red,blue) # ["red", "blue"]と書いたのと同じ挙動になる

puts ['red', 'blue']
puts %w(red,blue) # ['red', 'blue']と書いたのと同じ挙動になる