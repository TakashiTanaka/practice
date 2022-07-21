# match
# バージョン3.10以上じゃないと使えない

signal = input("signal color? ")

match signal:
	case "red":
		print("Stop!")
	case "yellow":
		print("Slow Down!")
	case "blue" | "green":
		print("Go!")
	case _:
		print("Invalid signal color...")
