# if elseを1行で書く

initial_balance = int(input("Initial Balance?"))

# if initial_balance >= 100_000:
# 	RATE = 1.1
# else:
# 	RATE = 1.01

RATE = 1.1 if initial_balance >= 100_000 else 1.01

print(f"Current rate: {RATE:.2f}")
print(f"Year 0: {initial_balance:,.2f}")
print(f"Year 1: {initial_balance * RATE:,.2f}")
print(f"Year 2: {initial_balance * RATE * RATE:,.2f}")
