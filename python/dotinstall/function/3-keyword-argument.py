# キーワード引数


def greet(name, by):
    print(f"{by} said, Hi! {name}")


greet(name="Taro", by="John")  # キーワード引数（引数の意味がわかりやすい・位置を変えてもOKというメリットがある）
greet("Jiro", "Rich")  # 位置引数
