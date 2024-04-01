<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Attendance extends Model
{
    use HasUuids;
    use HasFactory;

    protected $fillable = [
        'user_id',
        'latitude',
        'longitude',
        'address',
        'description',
        'status',
    ];

    public function newUniqueId()
    {
        return (string) Uuid::uuid4();
    }
}
