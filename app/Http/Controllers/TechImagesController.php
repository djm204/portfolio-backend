<?php
namespace App\Http\Controllers;

use App\Service\TechImageService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class TechImagesController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function getImages(Request $request)
    {
        $techImageService = app(TechImageService::class);
        $images = $techImageService->getImages();

        return response()->json($images, 200);
    }
}
