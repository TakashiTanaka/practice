# 順次処理
print(100)

# 条件分岐
# if
# インデントでブロックを表現する
score = int(input("Score? "))
if score > 80:
	print("OK!")
	print("Good Job!")
else:
	print("NG!")
	print("Nice Try!")
print("End of Program...")

# 論理演算子

# and なおかつ
# or もしくは
# not 〜ではない

eng_score = int(input("English Score? "))
math_score = int(input("Math Score? "))

# if eng_score == 100 and math_score == 100:
# if eng_score == 100 or math_score == 100:
if not (eng_score == 0 or math_score == 0):
	print("OK!")
else:
	print("NG")