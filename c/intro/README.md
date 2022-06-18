# C言語入門

ドットインストールでC言語入門

Hello World

```c:hello.c
# include <stdio.h>

/* コメント */

int main(void) {
	printf("hello world\n");
	return 0;
}
```

コンパイル
`gcc -o hello hello.c`

変数

変数宣言
`型 変数名`

宣言と代入
`型 変数名 = 値`

演算子
`+ - * / %`

単項演算子
`++ --`

if文

`if(条件) {}`

switch文

どれにも当てはまらない場合の処理はdefaultに書く

```c:switch
switch(条件) {
  case 条件:
    処理;
    break;
  case 条件:
    処理;
    break;
  case 条件:
    処理;
    break;
  case default:
    処理;
}
```

<https://dotinstall.com/lessons/basic_c/9401>
