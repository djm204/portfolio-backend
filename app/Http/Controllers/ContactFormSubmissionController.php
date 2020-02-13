<?php
namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Mail;

class ContactFormSubmissionController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function sendMail(Request $request)
    {
        $data = $request->all();
        $from = $data['email'];
        $formattedMessage = $this->buildMessage($data);

        Mail::raw($formattedMessage, function ($message) use ($from) {
            $message->from($from, 'Portfolio Contact Form Submission');
            $message->replyTo($from);
            $message->to(env('CONTACT_FORM_RECIPIENT'));
        });

        if (Mail::failures()) {
            return response()->json(['errors' => 'Something went wrong, we are looking into it. Try again soon.']);
        }

        return response()->json(['success' => 'Thank you for your message! Someone will contact you shortly.']);
    }

    public function buildMessage($data)
    {
        $from = $data['email'];
        $name = $data['name'];
        $phone = $data['phone'];
        $timestamp = $this->getTimestamp();
        $header = "New message from: " . $name . "\nemail: " . $from . "\nTimestamp: " . $timestamp;
        return $header . "\n\nMessage Body:\n\n" . $data['message'];
    }

    private function getTimestamp()
    {
        $date = Carbon::now('America/Winnipeg');
        return "{$date->format('l jS \\of F Y h:i:s A')}";
    }
}
