# forとf文字列の組み合わせ

initial_balance = int(input("Initial Balance?"))
RATE = 1.1
# print(f"Year 0: {initial_balance:,.2f}")
# print(f"Year 1: {initial_balance * RATE:,.2f}")
# print(f"Year 2: {initial_balance * RATE * RATE:,.2f}")

for year in range(10):
	print(f"Year {year}: {initial_balance * RATE ** year:,.2f}")