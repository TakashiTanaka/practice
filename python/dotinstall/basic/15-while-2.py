# do while的なwhileの書き方

# command = None
# while command != 0:

while 1 == 1:
	command = int(input("Select 1, 2, 3 (0: Exit)"))
	match command:
		case 1:
			print("Menu 1")
		case 2:
			print("Menu 2")
		case 3:
			print("Menu 3")
		case 0:
			pass