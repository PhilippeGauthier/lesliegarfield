<?php

use Symfony\Component\Finder\Finder as Finder;

class Hooks_convert_to_json extends Hooks {

    public function convert_to_json__all_content() {
    
        $finder = new Finder();
        $files  = $finder->files()->in(Config::getContentRoot())->name('*.md');
        
        $trimmed_data = array();

        foreach ($finder as $file) {
            // Dump the absolute path
            $trimmed_data[] = $this->trimData(YAML::parse($file->getContents()));
        }
        
        //write out the file
        File::put('/Users/philippe/Sites/lesliegarfield.com/statamic/_content/foo.json', json_encode($trimmed_data));
    }
    
    private function trimData($data) {
        // in here unset the unneeded data
        unset($data['template']);
        
        return $data;
    }
}