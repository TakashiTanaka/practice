# "文字列" % 値
# %s 文字列
# %d 整数
# %f 浮動小数点

p "name: %s" % "taguchi"
p "name: %10s" % "taguchi" # 10桁分のスペースを確保して埋め込み
p "name: %-10s" % "taguchi" # 10桁分のスペースを確保しつつ、左寄せで埋め込み

p "id: %d, rate: %f" % [355, 3.284] # 値が複数の場合、配列で渡す
p "id: %05d, rate: %10.2f" % [355, 3.284]
# 05の部分 -> 5桁で指定。また、5桁に満たない場合は0で埋める
# 10.2の部分 -> 全体の文字数が10文字、そのうち小数点以下が2文字、また小数点の.も文字数にカウントされる

# printfはフォーマットした値を表示する
printf("name: %10s\n", "taguchi") # printfを使った場合
printf("id: %05d, rate: %10.2f\n", 355, 3.284) # printfを使った場合

# sprinfはフォーマットした値を返す
p sprintf("name: %10s\n", "taguchi") # sprintfを使った場合
p sprintf("id: %05d, rate: %10.2f\n", 355, 3.284) # sprintfを使った場合
