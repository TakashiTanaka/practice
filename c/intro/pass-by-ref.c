# include <stdio.h>

/* 
参照渡し

値渡し
参照渡し

の2種類がある

参照渡しだとスマートに解決できるパターンがある
*/

// 変数の値を交換する関数
void swap(int *pa, int *pb) {
	int tmp;
	// aの値をtmpに代入
	tmp = *pa;
	// bの値をaに代入
	*pa = *pb;
	// tmpに格納されていたaの値をbに代入
	*pb = tmp;
}

int main(void) {

	int a = 5;
	int b = 10;
	swap(&a, &b);
	printf("a: %d, b:%d\n", a, b);

	return 0;
}