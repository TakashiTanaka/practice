# if elseを1行で書く

initial_balance = int(input("Initial Balance?"))

# 値を一旦変数nにおさめて、nを使って条件分岐させる

match initial_balance:
	case n if n >= 100_000:
		RATE = 1.1
	case n if n >= 80_000:
		RATE = 1.1
	case n if n >= 60_000:
		RATE = 1.1
	case _:
		RATE = 1.01

print(f"Current rate: {RATE:.2f}")
print(f"Year 0: {initial_balance:,.2f}")
print(f"Year 1: {initial_balance * RATE:,.2f}")
print(f"Year 2: {initial_balance * RATE * RATE:,.2f}")
