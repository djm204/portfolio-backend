<?php

namespace App\Service;

use App\Repo\ContactInfoRepo;
use Illuminate\Support\Collection;

class ContactInfoService
{
    /** @var ContactInfoModel */
    protected $contactInfoModel;

    /** @var ContactInfoDBModel */
    protected $contactInfoDBModel;

    public function __construct()
    {
        $this->contactInfoRepo = new ContactInfoRepo();
    }

    public function getAll(): Collection
    {
        $data = $this->contactInfoRepo->getAll();

        $preparedResponse = $data->map(function ($contact) {
            return $contact->toModel()->toArray();
        });
        
        return $preparedResponse;
    }
}
