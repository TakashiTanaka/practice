# 無名関数
# lambda 仮引数: リターン内容


def calc(n, func):
    return func(n)


print(calc(10, lambda n: n * 2))  # 20
print(calc(10, lambda n: n * 3))  # 30
