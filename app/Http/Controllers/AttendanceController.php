<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    //
    public function submit(Request $request)
    {
        $request->validate([
            'status' => 'required',
            'description' => 'required_if:status,sick,leave,permit,business_trip,remote|max:500',
        ]);

        Attendance::create(
            [
                'status' => $request->status,
                'description' => $request->description,
                'user_id' => $request->user()->id,
            ]
        );
    }
}
