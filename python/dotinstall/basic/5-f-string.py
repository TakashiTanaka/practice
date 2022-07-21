# f文字列のオプション
# 値の後の:に続けてオプションを書く

initial_balance = int(input("Initial Balance?"))
RATE = 1.1
print(f"Year 0: {initial_balance:,.2f}")
print(f"Year 1: {initial_balance * RATE:,.2f}")
print(f"Year 2: {initial_balance * RATE * RATE:,.2f}")
