# while
# ユーザーからの入力をまつ。
# 受け取った値が0以外であれば入力を再度受け付ける

command = int(input("Select 1, 2, 3 (0: Exit)"))
while command != 0:
	match command:
		case 1:
			print("Menu 1")
		case 2:
			print("Menu 2")
		case 3:
			print("Menu 3")
	command = int(input("Select 1, 2, 3 (0: Exit)"))