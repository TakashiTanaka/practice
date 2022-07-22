# forの中でforを使う

initial_balance = int(input("Initial Balance?"))
RATE = 1.1

for i in range(3):
	if i != 0:
		initial_balance += 10_000
	for year in range(3):
		print(f"Year {year}: {initial_balance * RATE ** year:,.2f}")