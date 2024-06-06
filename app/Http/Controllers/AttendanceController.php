<?php

namespace App\Http\Controllers;

use App\Models\Attendance;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class AttendanceController extends Controller
{
    //
    public function submit(Request $request)
    {
        $request->validate([
            'status' => 'required',
            'description' => 'required_if:status,sick,leave,permit,business_trip,remote|max:500',
            "latitude" => "required",
            "longitude" => "required",
            "address" => "required",
        ]);

        Attendance::create(
            [
                'status' => $request->status,
                'description' => $request->description,
                'user_id' => $request->user()->id,
                'latitude' => $request->latitude,
                'longitude' => $request->longitude,
                'address' => $request->address,
            ]
        );

        return redirect::route('users');
    }
}
