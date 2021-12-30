<?php

// 検査対象の配列
$array = ['one', 'two', 'three'];

// oneは含まれているのでtrue
var_dump(in_array('one', $array, true));

// fourは含まれていないのでfalse
var_dump(in_array('four', $array, true));
