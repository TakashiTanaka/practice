# include <stdio.h>

/* 
if文の使い方

*/


int main(void) {
	
	int score = 52;

	if (score >= 60) {
		printf("OK\n");
	} else if (score >= 50){ 
		printf("soso...\n");
	} else {
		printf("NG\n");
	}

	return 0;
}