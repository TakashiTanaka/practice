# breakとcontinue
# breakは反復処理から抜ける
# continueはそれ以降の処理をスキップして反復処理に戻る

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
			break
		case _:
			print("Invalid Command Try Again!")
			continue
	print("Menu processed correctly")