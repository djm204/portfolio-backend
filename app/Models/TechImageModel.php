<?php

namespace App\Models;

class TechImageModel
{
    /**
     * image path
     *
     * @var string
     */
    protected $imagePath;

    /**
     * image type
     *
     * @var string
     */
    protected $imageType;

    /**
     * alt text for image
     *
     * @var string
     */
    protected $altText;

    public function __construct(string $fileName)
    {
        $imagePieces = explode('.', $fileName);
        $this->setType($imagePieces[1]);
        $this->setAltText($imagePieces[0]);
        $this->setPath('/img/tech/' . $fileName);
    }

    public function setType(string $type)
    {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setAltText(string $altText)
    {
        $this->altText = $altText;
    }

    public function getAltText()
    {
        return $this->altText;
    }

    public function setPath(string $imagePath)
    {
        $this->imagePath = $imagePath;
    }

    public function getPath()
    {
        return $this->imagePath;
    }

    public function toArray()
    {
        return [
            'type' => $this->getType(),
            'imgUrl' => $this->getPath(),
            'altText' => $this->getAltText(),
        ];
    }
}
