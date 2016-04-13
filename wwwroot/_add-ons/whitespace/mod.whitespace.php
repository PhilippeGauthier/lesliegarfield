<?php
class Modifier_whitespace extends Modifier
{

	public function index($value, $parameters=array()) {
		return str_replace(' ', '%20', $value);
	}

}