<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImageSimpleResource;
use App\Models\Book;
use App\Models\Image;

class BookImageController extends Controller
{
    public function show($bookid)
    {
        $book = Book::find($bookid);
        if (is_null($book)) {
            return response()->json(['message' => 'data not found'], 403);
        }
        $image = Image::find($book->imageid);

        if (is_null($image)) {
            return response()->json(['message' => 'image not found'], 403);
        }
        return new ImageSimpleResource($image);
    }
}
