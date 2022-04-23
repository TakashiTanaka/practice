# include <stdio.h>

/* 
ポインタ：アドレスを格納するための変数
うまく使うことで高速な処理をかける

メモリ（記憶領域）

& ： アドレス演算子

* ： 間接演算子
*/

int main(void) {

	int a;
	a = 10;

	// ポインタ変数の宣言
	int *pa;
	pa = &a;

	printf("%d\n", *pa);

	return 0;
}