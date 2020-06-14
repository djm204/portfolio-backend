<?php

declare (strict_types = 1);

namespace App\Service;

use App\Models\TechImageModel as Image;

class TechImageService
{
    public function getImages()
    {
        $dir = public_path() . '/img/tech/';
        $imageFiles = scandir($dir);
        $images = [];
        foreach ($imageFiles as $key => $path) {
            if (is_dir($dir . $path) || $path === '..' || $path === '.') {
                continue;
            }
            $image = new Image($path);

            $images["{$image->getAltText()}"] = $image->toArray();
        }

        $sortedImages = $this->sortImages($images);

        return json_encode($sortedImages);
    }

    private function sortImages(array $images)
    {
        return [
            $images['ReactJS'],
            $images['TypeScript'],
            $images['CSS3'],
            $images['GoLang'],
            $images['NodeJS'],
            $images['PHP'],
            $images['MySQL'],
            $images['Android'],
            $images['Kubernetes'],
        ];
    }
}
