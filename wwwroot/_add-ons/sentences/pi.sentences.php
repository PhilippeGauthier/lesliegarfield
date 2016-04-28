<?php
class Plugin_sentences extends Plugin
{
    public function sentences()
    {
        $limit  = $this->fetchParam('limit', NULL);
        $ending = $this->fetchParam('ending', '.', null, false, false);

        $this->content = Parse::contextualTemplate($this->content, array(), $this->context);

        $sentences = preg_split("/[\n\r\t. ]+ /", $this->content, $limit + 1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_OFFSET_CAPTURE);
        if (count($sentences) > $limit) {
            end($sentences);
            $last_sentence = prev($sentences);

            $this->content = substr($this->content, 0, $last_sentence[1] + strlen($last_sentence[0])) . $ending;
        }

        return $this->content;
    }
}