# 関数を変数に代入
# 関数を引数として渡す


def double(n):
    return n * 2


def triple(n):
    return n * 3


def calc(n, func):
    return func(n)


print(double(10))  # 20
twice = double  # doubleをtwiceに代入
print(twice(10))  # 20


print(calc(10, double))  # 20
print(calc(10, triple))  # 30
