<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Service\ContactInfoService;

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

    public function get(Request $request): JsonResponse {
        return response()->json($this->contactInfoService->getAll());
    }
}
