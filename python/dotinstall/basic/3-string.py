# 文字列の基本

print('It is a pen.')
print('It\'s a pen.')
print("It's a pen.")

# 改行を表現したい時
print("It's \na \npen.")

print("""\
It's
a
pen.
""")

# 文字列操作

# print("*-" * 10) # 繰り返し表現もできる
# print("Taro" " " "Yamada")
# print("Taro" + " " + "Yamada")
# print("*-" * 10)

fname = 'Taro'
lname = 'Yamada'
age = 32
separator = '*-'
print(separator * 10) # 繰り返し表現もできる
print(fname + " " + lname + ", " + str(age) + "years old!") # ageは数値型なのでstring型に変換する必要がある
print("I am {} {}, {} years old!" . format(fname, lname, age)) # formatを使うと値を埋め込める
print(f"I am {fname} {lname}, {age} years old!") # f文字列を使うとより直感的にできる
print("*-" * 10)
