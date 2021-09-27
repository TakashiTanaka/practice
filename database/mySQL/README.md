# MySQL入門
dotinstallでMySQLの入門基礎編を勉強しました

使用するのはMariaDB
SQLとはStructured Query Languageのこと

## 用語
- テーブル -  表

## 用語
- テーブル -  表
- レコード > 行
- カラム -> 列

## 基本知識

- テーブルを作るには
	```
	CREATE TABLE 名前 (
		カラム名 データ型
	);
	```

- レコードの挿入
	```
	INSERT INTO
		テーブル名 (カラム名)
	VALUES
		(値);
	```

- テーブルの構造を確認
	```
	DESC テーブル名;
	```

- テーブルの一覧を確認
	```
	SHOW TABLES;
	```

- テーブルを削除
	```
	// 単純に削除。ただ、このままだと指定したテーブルが存在していなかった場合エラーになる
	DROP TABLE テーブル名;

	// もし指定したテーブルが存在していたら削除
	DROP TABLE IF EXISTS テーブル名;
	```

- 指定のテーブルから全てのレコードを抽出
	```
	SELECT * FROM テーブル名;
	```

- コメント
	```
	-- comment

	# comment

	/*
	comment
	*/
	```

## データ型

- INT（整数）
	`UNSIGNED`をつけると、マイナス値を無効にして使える値の範囲を広げる

- DECIMAL（固定小数点）
	`DECIMAL(全体の桁, 小数点以下の数)`

- VARCHAR（可変長文字列）
	`VARCHAR(最大値)`

- CHAR（固定長文字列）

- ENUM（特定の文字列の中から一つだけ格納）
	`ENUM (文字列, 文字列, ...)`
	INSERT時には文字列かインデックス番号で指定する

- SET（特定の文字列の中から複数の値を格納）
	`SET (文字列, 文字列, ...)`
	INSERT時には文字列か数値で複数指定  
	数値は左から2の0乗（1）, 2の1乗（2）, 2の2乗（4）...となっている  
	そのため、数値で指定する場合は合計した値を入力すれば良い  
	```
	tests SET('test1', 'test2', 'test3')

	INSERT INTO テーブル名 (test) VALUES
		(3), // test1とtest2を入れたい場合
		(6) // test2とtest3を入れたい場合
	```

- BOOL（TRUE or FALSE）

- DATETIME（日時）
	`2020-10-10 15:42:04`のように指定する  
	時間を省略すると`00:00:00`となる  
	`NOW()`とすると現在の日付となる

- NULL（空）

- NOT NULL
	カラムに`NOT NULL`をつけると空だったときにエラーを出すようになる

- DEFAULT
	カラムに`DEFAULT デフォルト値`をつけると空だったときにデフォルト値が入るようになる

- CHECK
	カラムに`CHECK (条件式)`をつけると、値の範囲を制限できる。範囲外だとエラーになる

- UNIQUE
	カラムに`UNIQUE`をつけると、重複した値が挿入されたときにエラーが出るようになる

- PRIMARY KEY
	`PRIMARY KEY (カラム名)`とすることで指定したカラムを主キーに設定する  
	主キーのカラムが空だったり重複していたらエラーが出るようになる

- AUTO_INCREMENT
	PRIMARY KEYが設定されている場合、カラムにAUTO_INCREMENTをつけると、自動的に連番にしてくれる

- SELECT
	データを抽出する
	```
	// 全てのデータを抽出
	SELECT * FROM テーブル名;

	// 特定のカラムのデータを抽出（複数選択の場合はカンマ区切り）
	SELECT カラム名, カラム名 FROM テーブル名;
	```

- WHERE
	条件にマッチしたデータを抽出する
	```
	// WHEREの後に条件を記述
	SELECT * FROM テーブル名 WHERE 条件;
	```

- AND, BETWEEN, OR, IN
	```
	// 10以下かつ20以下
	SELECT * FROM テーブル名 WHERE カラム名 >=10 AND カラム名 <= 20;

	// 上記と同じ内容をBETWEENで表現
	SELECT * FROM テーブル名 WHERE カラム名 BETWEEN 10 AND 20;

	// BETWEENの条件を反転させる
	SELECT * FROM テーブル名 WHERE カラム名 NOT BETWEEN 10 AND 20;

	// 10 もしくは 20
	SELECT * FROM テーブル名 WHERE カラム名 = 10 OR カラム名 = 20;

	// 上記と同じ内容をINで表現
	SELECT * FROM テーブル名 WHERE カラム名 IN (10, 20)

	// INの条件を反転させる
	SELECT * FROM テーブル名 WHERE カラム名 NOT IN (10, 20)
	```

- LIKE, %, _, BINARY
	% -> 0文字以上の任意の文字
	_ -> 任意の一文字

	```
	// tから始まる文字列を抽出
	SELECT * FROM テーブル名 WHERE カラム名 LIKE 't%';

	// 大文字／小文字を区別したい場合はBINARYをつける
	SELECT * FROM テーブル名 WHERE カラム名 LIKE BINARY 't%';

	// 3文字目がaでそれ以降は0文字以上の任意の文字
	SELECT * FROM テーブル名 WHERE カラム名 LIKE '__a%';

	// _と%自体を文字列として扱う場合（エスケープ処理）
	// %を文字列内に含むデータを抽出する例
	SELECT * FROM テーブル名 WHERE カラム名 LIKE '%\%%';
	```

- IS NULL, IS NOT NULL
	NULLのレコードも抽出したい場合、IS NULLも条件に含める
	```
	// 10ではないもしくは、NULLのデータを全て抽出
	SELECT * FROM テーブル名 WHERE カラム名 != 10 OR カラム名 IS NULL;
	
	// IS NULLを反転させる場合はNOTをつける
	SELECT * FROM テーブル名 WHERE カラム名 != 10 OR カラム名 IS NOT NULL;
	```

- ORDER BY, DESC, LIMIT, OFFSET
	```
	// 小さい順に並び替え
	SELECT * FROM テーブル名 ORDER BY カラム名;

	// 大きい順に並び替え
	SELECT * FROM テーブル名 ORDER BY カラム名 DESC;

	// 最初の指定したカラムが同値だった時の他のカラムの順序を指定
	SELECT * FROM テーブル名 ORDER BY カラム名 DESC, 他のカラム名;

	// 任意の上位件数を抽出する
	// 上位三件を抽出
	SELECT * FROM テーブル名 ORDER BY カラム名 DESC, 他のカラム名 LIMIT 3;

	// 特定の位置から上位件数を抽出する
	// 上位2件を除外した上で、上位3件抽出
	SELECT * FROM テーブル名 ORDER BY カラム名 DESC, 他のカラム名 LIMIT 3 OFFSET 2;
	SELECT * FROM テーブル名 ORDER BY カラム名 DESC, 他のカラム名 LIMIT 2, 3;
	```

- 四則演算
	```
	// 抽出したデータを利用して四則演算
	SELECT カラム名 * 500 / 3 FROM テーブル名

	// ASを利用して結果のカラムを別名で表示
	ELECT カラム名 * 500 / 3 AS カラム別名 FROM テーブル名
	
	// FLOOR（端数切捨て）, CEIL（端数切り上げ）, ROUND（四捨五入）
	SELECT FLOOR(カラム名 * 500 / 3) FROM テーブル名
	SELECT CEIL(カラム名 * 500 / 3) FROM テーブル名
	SELECT ROUND(カラム名 * 500 / 3) FROM テーブル名
	// ROUNDの小数点以下の桁数指定（例：2桁にする場合）
	SELECT ROUND(カラム名 * 500 / 3, 2) FROM テーブル名
	```

- 文字列の加工
	```
	// SUBSTRING -> 文字列抽出
	// 先頭から3文字分
	SELECT SUBSTRING(カラム名, 3) FROM テーブル名
	// 3文字目から2文字分
	SELECT SUBSTRING(カラム名, 3, 2) FROM テーブル名
	// 末尾から二文字分
	SELECT SUBSTRING(カラム名, -2) FROM テーブル名

	// CONCAT -> 文字列連結
	// 値同士を-で繋ぐ例
	SELECT SUBSTRING(カラム名, '-', 'カラム名') FROM テーブル名

	// LENGTH -> 文字数
	SELECT LENGTH(カラム名) FROM テーブル名

	// CHAR_LENGTH -> マルチバイト対応の文字数
	SELECT CHAR_LENGTH(カラム名) FROM テーブル名

	// UPPER -> 大文字に変換
	SELECT UPPER(カラム名) FROM テーブル名
	```

- 日時
	```
	// 年
	SELECT YEAR(カラム名) FROM テーブル名

	// 月
	SELECT MONTH(カラム名) FROM テーブル名

	// 日
	SELECT DAY(カラム名) FROM テーブル名
	
	// 日付形式の指定
	SELECT DATE_FORMAT(カラム名, フォーマット) FROM テーブル名

	// 日付の計算（例：7日後の値を取得）
	SELECT DATE_ADD(カラム名, INTERVAL 7 DAY) FROM テーブル名

	// 現在の日付と比較
	SELECT DATEDIFF(カラム名, NOW()) FROM テーブル名
	```

- UPDATE
	元のデータを更新する
	```
	// 元のデータの値を更新する
	UPDATE テーブル名 SET カラム名 = 値;

	// 条件をつけて元のデータの値を更新する
	UPDATE テーブル名 SET カラム名 = 値 WHERE 条件;

	// 複数のカラムの値を更新する
	UPDATE テーブル名 SET カラム名 = 値, カラム名 = 値...
	```

- DELETE
	レコードの削除
	```
	DELETE FROM テーブル名 WHERE 条件;
	```

- TRUNCATE TABLE
	連番をリセットしてテーブル作成
	```
	TRUNCATE TABLE テーブル名
	```

- DEFAULT NOW
	```

	```

- ALTER TABLE
	```
	// カラムを挿入
	ALTER TABLE テーブル名 ADD カラム名 型;

	// カラムを挿入（位置の指定）
	ALTER TABLE テーブル名 ADD カラム名 型 AFTER カラム名;

	// カラムを挿入（テーブルの最初に挿入）
	ALTER TABLE テーブル名 ADD カラム名 型 FIRST;

	// カラムの削除
	ALTER TABLE テーブル名 DROP カラム名;

	// カラムの名前と型を変更
	ALTER TABLE テーブル名 CHANGE 変更前カラム名 変更後カラム名 型;

	// テーブル名の変更
	ALTER TABLE 変更前テーブル名 RENAME 変更後テーブル名;
	```