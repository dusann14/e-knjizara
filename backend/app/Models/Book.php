<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'price',
        'description',
        'imageid'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function image()
    {
        return $this->belongsTo(Image::class, "imageid");
    }
}
