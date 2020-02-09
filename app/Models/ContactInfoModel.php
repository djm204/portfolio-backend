<?php

namespace App\Models;

class ContactInfoModel
{
    /**
     * Type of contact
     *
     * @var string
     */
    protected $type;

    /**
     * url or mailto: address
     *
     * @var string
     */
    protected $contactProfileUrl;

    /**
     * FA5 class for icon (optional)
     *
     * @var string
     */
    protected $iconClass;

    /**
     * Create a new contact info instance
     *
     * @return ContactInfo
     */
    public function __construct(string $type, string $contactProfileUrl, ?string $iconClass)
    {
        $this->setType($type);
        $this->setContactProfileUrl($contactProfileUrl);
        $this->setIconClass($iconClass);
    }

    public function setType(string $type) {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setContactProfileUrl(string $contactProfileUrl) {
        $this->contactProfileUrl = $contactProfileUrl;
    }

    public function getContactProfileUrl()
    {
        return $this->contactProfileUrl;
    }

    public function setIconClass(string $iconClass) {
        $this->iconClass = $iconClass;
    }

    public function getIconClass()
    {
        return $this->iconClass;
    }

    public function toArray()
    {
        return [
            'type' => $this->getType(),
            'contactProfileUrl' => $this->getContactProfileUrl(),
            'iconClass' => $this->getIconClass()
        ];
    }
}
