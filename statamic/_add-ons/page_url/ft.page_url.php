<?php
class Fieldtype_page_url extends Fieldtype
{
    public function render_field()
    {
        $url = Path::clean('/'.Request::get('path'));
        $url = preg_replace('/\/page$/', '', $url);

        return '<input type="hidden" name="'.$this->fieldname.'" value="'.$url.'"/>';
    }
}