# 変数

# print(10000)
# print(10000 * 1.1)
# print(10000 * 1.1 * 1.1)

initial_balance = 10000
RATE = 1.1 # 定数は慣習的にすべて大文字にする（でも実際は再代入可能）
print(initial_balance)
print(initial_balance * RATE)
print(initial_balance * RATE * RATE)

# a-z A-Z 0-9 _
# 数字から初めてはいけない
# 予約語はつかってはいけない if else or and ...
# 大文字小文字は区別される

# 値の再代入
initial_balance = 11000
initial_balance = initial_balance + 1000
initial_balance += 1000 # 省略記法
