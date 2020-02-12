<?php

namespace App\Eloquent;

use App\Models\ContactInfoModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection as DBCollection;

class ContactInfoDBModel extends Model
{
    /** @var string */
    protected $table = 'contact_info';

    /** @var string */
    protected $primaryKey = 'id';

    /** @var Array */
    protected $attributes = [
        'type' => '',
        'contactProfileUrl' => '',
        'iconClass' => '',
    ];

    public function getAll(): DBCollection
    {
        return $this->all();
    }

    public function toModel(): ContactInfoModel
    {
        $data = $this->toArray();

        return new ContactInfoModel(
            $data['type'],
            $data['contactProfileUrl'],
            $data['iconClass']
        );
    }
}
