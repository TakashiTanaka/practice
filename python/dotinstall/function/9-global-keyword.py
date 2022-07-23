# 変数の挙動を理解する


def get_price(a, b, rate):
    # 仮引数、値が代入された変数 → ローカル変数
    # 値が代入されていない変数 → 関数外のスコープを探す
    if a + b >= 3000:
        rate = 1.05
    total = (a + b) * rate
    return total


rate = 1.1

print(get_price(300, 700, rate))  # グローバル変数を利用したい場合は引数として渡す方が安全
print(get_price(3000, 7000, rate))
print(rate)  # 1.1
