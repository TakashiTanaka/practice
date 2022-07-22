# 真偽値
# True
# False 0 0.0 '' None

while True:
	command = int(input("Select 1, 2, 3 (0: Exit)"))
	match command:
		case 1:
			print("Menu 1")
		case 2:
			print("Menu 2")
		case 3:
			print("Menu 3")
		case 0:
			break
		case _:
			print("Invalid Command Try Again!")
			continue
	print("Menu processed correctly")