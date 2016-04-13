<?php
class Modifier_no_commas extends Modifier
{

	public function index($value, $parameters=array()) {
		return str_replace(',', '', $value);
	}

}