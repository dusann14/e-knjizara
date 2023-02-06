<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        // return new BookCollection($books);
        return BookResource::collection($books);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'image'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book = Book::create([
            'title' => $request->title,
            'author' => $request->author,
            'description' => $request->description,
            'price' => $request->price,
        ]);

        if ($request->hasFile('image')) {
            if (is_null($request->file('image'))) {
                return response()->json(['message' => 'book created successfully', 'book' => new BookResource($book)], 200);
            }
            $path = $request->file('image')->store('/public/images');
            $url = Storage::url($path);
            $image = Image::create(['url' => $url, 'path' => $path]);
            $book->imageid = $image->id;
            $book->save();
        } else {
            return response()->json(['message' => 'book created successfully', 'book' => new BookResource($book)], 200);
        }
        return response()->json(['message' => 'book created successfully', 'book' => new BookResource($book)], 200);

        // return response()->json(['message' => 'book created successfully', 'book' => new BookResource($book)], 200);
    }

    public function show($author)
    {
        $books = Book::get()->where('author', $author);

        if ($books->isEmpty()) {
            return response()->json(['message' => 'book not found'], 403);
        }
        return BookResource::collection($books);
    }

    public function update(Request $request, $bookid)
    {
        $validator = Validator::make($request->all(), [
            'price' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book = Book::find($bookid);

        if (is_null($book)) {
            return response()->json(['message' => 'book not found'], 403);
        }

        $book->update(['price' => $request->price]);

        return response()->json(['message' => 'book updated successfully', 'book' => new BookResource($book)], 200);
    }

    public function destroy($bookid)
    {
        $book = Book::find($bookid);
        if (is_null($book)) {
            return response()->json(['message' => 'book not found'], 403);
        }
        $book->delete();
        return response()->json(['mesage' => 'book deleted successfully'], 200);
    }
}
