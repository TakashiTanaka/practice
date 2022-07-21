# elif

signal = input("signal color? ")

if signal == "red":
	print("Stop!")
elif signal == "yellow":
	print("Slow Down!")
elif signal == "blue" or signal == "green":
	print("Go!")
else:
	print("Invalid signal color...")