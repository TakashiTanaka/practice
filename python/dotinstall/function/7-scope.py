# 変数のスコープ


def get_price(a, b):
    # 関数内で定義されたa, b, totalは関数内でしか参照できない = ローカル変数
    total = a + b
    return total


print(get_price(300, 700))
# print(total) # totalは関数内で定義された関数スコープの変数なので、エラーとなる

total = 30  # グローバル変数

print(total)  # グローバル変数として定義された30が表示される
