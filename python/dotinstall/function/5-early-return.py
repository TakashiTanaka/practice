# 早期リターン
# 関数の中でreturnを呼び出すと処理が終了する


def print_username(name):
    # if name != "admin" and name != "support":
    #     print(name)

    # 早期リターン（条件に合わないものを先にふるい落とす手法）
    if name == "admin":
        return
    if name == "support":
        return

    print(name)


print_username("taro")
print_username("jiro")
print_username("admin")
print_username("saburo")
print_username("support")
