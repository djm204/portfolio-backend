<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Service\ContactInfoService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactController extends Controller
{
    /** @var ContactInfoService */
    protected $contactInfoService;

    /** @var string*/
    protected $redirectTo = RouteServiceProvider::HOME;

    /** @return void */
    public function __construct()
    {
        $this->contactInfoService = new ContactInfoService();
    }

    public function get(Request $request): Response
    {
        return response($this->contactInfoService->getAll());
    }
}
