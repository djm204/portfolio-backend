<?php

namespace App\Repo;

use App\Eloquent\ContactInfoDBModel;
use App\Models\ContactInfoModel;
use Illuminate\Database\Eloquent\Collection as DBCollection;

class ContactInfoRepo
{
    /** @var ContactInfoModel */
    protected $contactInfoModel;

    /** @var ContactInfoDBModel */
    protected $contactInfoDBModel;

    public function __construct()
    {
        $this->contactInfoDBModel = new ContactInfoDBModel();
    }

    public function getAll(): DBCollection
    {
        return $this->contactInfoDBModel->getAll();
    }
}
