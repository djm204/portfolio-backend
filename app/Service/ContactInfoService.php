<?php

namespace App\Service;

use App\Repo\ContactInfoRepo;

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

    public function getAll(): array
    {
        $data = $this->contactInfoRepo->getAll();

        $preparedResponse;

        foreach ($data as $contact) {
            $preparedResponse[] = $contact->toModel()->toArray();
        };

        return $preparedResponse;
    }
}
